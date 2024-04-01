# Simple Todo App
This is a todo application developed with the MERN stack that aids in managing daily tasks.

## Running the Application Locally

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install the necessary dependencies `npm install ` file in a web browser.

4. Run the app using `npm start`    

## Building Docker Image and Running a Container

1. Pull the Docker image from Docker Hub using the following command: `docker pull deandaryl/congenial-computing-machine-frontend` and `docker pull deandaryl/congenial-computing-machine-backend`

2. Build the container for the Docker image using the following command: `docker-compose build`

3. Once the image is built successfully, you can run a container using the following command: `docker-compose run`

4. Open a web browser and navigate to `http://localhost:5137` to access the ToDo application running inside the Docker container.

## Assumptions and Decisions

1. Users will have basic knowledge of how to use a web application.
2. The tasks in the todo list will not have any dependencies or priorities.
3. The application will not require authentication or user registration.
4. The application will be used for personal task management rather than team collaboration.
