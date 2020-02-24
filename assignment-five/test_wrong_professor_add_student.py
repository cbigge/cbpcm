import pytest
import System
import Student

# Since goggins is not a professor of comp_sci,
# he shouldn't be able to add akend3 to the
# class.
def test_wrong_professor_add_student(grading_system):
    grading_system.login('goggins', 'augurrox')
    grading_system.usr.add_student('akend3', 'comp_sci')
    grading_system.reload_data()
    grading_system.login('akend3', '123454321')
    courses = grading_system.usr.courses
    assert 'software_engineering' not in courses
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
