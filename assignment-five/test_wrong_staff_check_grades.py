import pytest
import System
import Student

# Since saab isnt professor of software_engineering,
# check_grades should return an empty list.
def test_wrong_staff_check_grades(grading_system):
    grading_system.login('saab', 'boomr345')
    grades = grading_system.usr.check_grades('hdjsr7', 'software_engineering')
    assert grades == []
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
