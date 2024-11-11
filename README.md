# Vue To-Do List App

A simple and elegant To-Do List application built with Vue.js, Bootstrap, and local storage. This application allows users to manage their tasks efficiently through basic CRUD operations: Create, Read, Update, and Delete.

<img width="404" alt="to do list" src="https://github.com/user-attachments/assets/bf18280a-ca04-47ca-8908-7d9c953b48e3">


## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **Edit Tasks**: Users can edit existing tasks using a modal.
- **Delete Tasks**: Users can remove tasks from their list.
- **Mark Tasks as Done**: Tasks can be marked as completed by checking a box, which will apply a strikethrough style.
- **Local Storage**: Tasks are saved in the browser's local storage, so they persist even after refreshing the page.
- **Task Filtering**: Tasks can be viewed in three tabs:
  - **All Tasks**: Displays all tasks.
  - **Pending Tasks**: Shows only tasks that are not yet marked as done.
  - **Done Tasks**: Displays only the completed tasks.
- **Task Counters**: Each tab shows the count of tasks:
  - **All Tasks Counter**: Displays the total number of tasks.
  - **Pending Tasks Counter**: Displays the number of tasks that are yet to be completed.
  - **Done Tasks Counter**: Displays the number of tasks that have been marked as completed.
- **Responsive Design**: The app is built with Bootstrap, ensuring it looks great on all screen sizes.
- **Visual Tab Highlighting**: The active tab is highlighted in blue, while inactive tabs are displayed in black for easy navigation.

## Technologies Used

- **Vue.js**: Front-end JavaScript framework used for creating the user interface.
- **Bootstrap**: CSS framework used for responsive design and layout.
- **Font Awesome**: Icons used for buttons such as edit and delete.

## Installation

### Prerequisites

- **Node.js** and **npm** should be installed on your machine.

### Clone the Repository, Install Dependencies, Run the Application

```bash
git clone https://github.com/yourusername/vue-todo-list.git
cd vue-todo-list

npm install

npm run serve
