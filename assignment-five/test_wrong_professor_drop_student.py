import pytest
import System
import Student

# Since goggins is not the professor of comp_sci,
# he should not be able to drop akend3 from it.
def test_wrong_professor_drop_student(grading_system):
    grading_system.login('goggins', 'augurrox')
    grading_system.usr.drop_student('akend3', 'comp_sci')
    grading_system.reload_data()
    grading_system.login('akend3', '123454321')
    courses = grading_system.usr.courses
    assert 'comp_sci' in courses
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
