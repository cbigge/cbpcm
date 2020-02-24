import pytest
import System
import Student

def test_check_password(grading_system):
    username = 'akend3'
    password = '123454321'
    assert grading_system.check_password(username,password) == True

    username = 'hdjsr7'
    password = 'pass1234'
    assert grading_system.check_password(username,password) == True

    username = 'yted91'
    password = 'imoutofpasswordnames'
    assert grading_system.check_password(username,password) == True

    username = 'calyam'
    password = '#yeet'
    assert grading_system.check_password(username,password) == True

@pytest.fixture
def grading_system():
    gradingSystem = System.System()
    gradingSystem.load_data()
    return gradingSystem
