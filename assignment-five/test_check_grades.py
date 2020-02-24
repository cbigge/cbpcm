import pytest
import System
import Student

def test_check_grades(grading_system):
    grading_system.login('akend3', '123454321')
    grades = grading_system.usr.check_grades('comp_sci')
    assert grades[0][1] == 99 and grades[1][1] == 66
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
