import pytest
import System
import Student

# Since goggins isnt professor of comp_sci,
# the grade should not be changed for akend3's 
# assignment1 from 99 to 0.
def test_wrong_staff_change_grade(grading_system):
    grading_system.login('goggins', 'augurrox')
    grading_system.usr.change_grade('akend3', 'comp_sci', 'assignment1', 0)
    grading_system.reload_data()
    grades = grading_system.usr.check_grades('akend3','comp_sci')
    assert grades[0][1] == 99
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem