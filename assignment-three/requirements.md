# Assignment 3 - Requirements |-----| Chris Bigge - cbpcm

1.) The different type of users of the software system include the following:
- Programming Students
- Teaching Assistants
- Professors

2.) Activities for each user listed above:
- Programming Students
	- View all of their available assignments with the due date for each
	- View their TA and professor info
	- They should be able to upload and submit any file(s) to the platform under a specific assignment
	- Optionally add submission comments with the file(s)
	- The platform should give them feedback that their file submission has worked properly and give them a view of the submitted assignments
	- They should be able to see their code, with syntax highlighting, in the specific assignment.
- Teaching Assistants
	- View all of the assignments for their section(s) with their due date and how many students have submitted each assignment out of the total number of students in the class
	- See each assignment's submissions for their section of students with the student's info attached to it
	- Ability to export or print the assignemnts and see which specific students haven't submitted anything.
- Professors
	- Ability to create new assignments that TAs and students can view from their dashboard
	- Assign specific TAs to the specific sections 
	- Create or delete sections
	- Access, view, and change grades for all of the student's assignments
	- Have a dashboard where they can see all of their assignments and statistics for each assignment, filterable by section
	- See which specific students haven't submitted assignments. 

3.) Relevant data and contraints for each activity:
- Assignment
	- title, unique
	- description
	- due date
	- status(open, closed)
	- CONSTRAINT on status based on due date
- Person
	- name(first, middle, last)
	- title
	- email, must be unique
	- phone(optional)
- Submission
	- title
	- content
	- programming language
	- date submitted
	- comment
	- submitter PersonalInfo, must match a PersonalInfo object with the title of student
	- CONSTRAINT - check assignment status to make sure open before submission goes through

4.) Infrastructure requirements:
- This system will be built as a web application. It will require a server to be run on that has an operating system that can run and manage a scalable web server.
- The system will also need a database to store the data used by the web application.
- Fast short term and long term storage with high capacity will be important for this web applciation to function well.
