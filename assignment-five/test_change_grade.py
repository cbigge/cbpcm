import pytest
import System
import Student

def test_change_grade(grading_system):
    grading_system.login('goggins', 'augurrox')
    grading_system.usr.change_grade('yted91', 'software_engineering', 'assignment1', 50)
    grading_system.reload_data()
    grades = grading_system.usr.check_grades('yted91','software_engineering')
    assert grades[0][1] == 50
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
