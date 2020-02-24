import pytest
import System
import Student

def test_submit_assignment(grading_system):
    grading_system.login('akend3', '123454321')
    grading_system.usr.submit_assignment('databases', 'assignment2', 'New submission', '2/9/20')
    grading_system.reload_data()
    assignment = grading_system.usr.courses['databases']['assignment2']
    assert assignment['submission_date'] == '2/9/20' and assignment['submission'] == 'New submission' 
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
