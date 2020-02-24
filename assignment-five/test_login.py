import pytest
import System
import Student

def test_login(grading_system):
    username = 'akend3'
    password = '123454321'
    grading_system.login(username,password)
    assert isinstance(grading_system.usr, Student.Student) and grading_system.usr.name == username

@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
