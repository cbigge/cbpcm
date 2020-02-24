import pytest
import System
import Student

def test_check_ontime(grading_system):
    grading_system.login('akend3', '123454321')
    
    grading_system.usr.submit_assignment('comp_sci', 'assignment2', 'New submission', '2/8/20')
    grading_system.reload_data()
    assignment = grading_system.usr.courses['comp_sci']['assignment2']
    assert assignment['ontime'] == True
    
    grading_system.usr.submit_assignment('comp_sci', 'assignment2', 'New submission', '2/11/20')
    grading_system.reload_data()
    assignment = grading_system.usr.courses['comp_sci']['assignment2']
    assert assignment['ontime'] == False
 
@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
