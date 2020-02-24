import pytest
import System
import Student

def test_create_assignment(grading_system):
    grading_system.login('goggins', 'augurrox')
    grading_system.usr.create_assignment('testHomework', '02/24/20', 'software_engineering')
    grading_system.reload_data()
    grading_system.login('hdjsr7', 'pass1234')
    assignments = grading_system.usr.all_courses['software_engineering']['assignments']
    assert 'testHomework' in assignments
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
