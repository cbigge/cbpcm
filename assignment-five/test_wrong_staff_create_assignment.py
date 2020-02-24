import pytest
import System
import Student

# Since goggins is not the professor of cloud_computing,
# the assignment shouldn't be created and therefore only
# two assignments should be in cloud_computing
def test_wrong_staff_create_assignment(grading_system):
    grading_system.login('goggins', 'augurrox')
    grading_system.usr.create_assignment('testHomework', '02/24/20', 'cloud_computing')
    grading_system.reload_data()
    grading_system.login('hdjsr7', 'pass1234')
    assignments = grading_system.usr.view_assignments('cloud_computing')
    assert 'testHomework' in assignments
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
