import pytest
import System
import Student

def test_add_student(grading_system):
    grading_system.login('goggins', 'augurrox')
    grading_system.usr.add_student('akend3', 'software_engineering')
    grading_system.reload_data()
    grading_system.login('akend3', '123454321')
    courses = grading_system.usr.courses
    assert 'software_engineering' in courses
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
