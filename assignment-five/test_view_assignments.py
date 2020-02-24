import pytest
import System
import Student

def test_view_assignments(grading_system):
    grading_system.login('akend3', '123454321')
    assignments = grading_system.usr.view_assignments('comp_sci')
    assert assignments[0][0] == 'assignment1' and assignments[0][1] == '2/1/20' and assignments[1][0] == 'assignment2' and assignments[1][1] == '2/8/20'
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
