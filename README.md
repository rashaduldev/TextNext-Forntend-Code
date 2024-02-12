# User List React App

This is a simple ReactJS application that fetches user data from the Dummy JSON's Users API endpoint and displays it in a user list page. Users can view details, search for users, sort the list, and add new users using this application.

## Functional Requirements

### 1. User List Page

- Displays all users in a card layout.
- Each card shows:
  - Avatar
  - First Name
  - Last Name
  - Email
  - Address (Street, Suite, City)[I Didn't see anything here saying "Suite" so ignored it]
  - Company Name

### 2. User Details Page

- Clicking on a user's name opens a separate page displaying detailed user information.

### 3. Search Feature

- An input field at the top allows users to search based on the user's name.

### 4. Sorting Feature

- A select input field at the top allows users to sort the users by:
  - Name
  - Email
  - Company Name

### 5. User Form

- A form on the user list page allows users to add new users with all the required information.
  -Here I used "react-toastify"
  -**[I could have used localhost, or I could have used database, since you didn't give any requirements, so I did it through state. Hope you understand.]

## Design Requirements

- Clean and responsive design.
- Each user's information displayed in separate cards.
  - One card per row on mobile.
  - Two cards per row on tablets.
  - Three or four cards per row on larger screens.

## Coding Requirements

- Functional components.
- Use of `useState` and `useEffect` hooks.
- React Router for routing.
- UI framework Tailwind CSS and daisyUI as a Tailwind CSS plugin.
- Optionally, use TypeScript.

## Project Structure


## Installation

1. Clone the repository: `git clone https://github.com/your-username/user-list-react-app.git`
2. Navigate to the project directory: `cd user-list-react-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start` / `npm run dev`

## Evaluation Criteria

1. **Functional Completeness**: Ensure all functional requirements are met.
2. **Performance of the App**: Optimize for performance where necessary.
3. **UI Design Screens**: The app should have a clean and responsive design.
4. **Component-based Design**: Ensure proper organization and modularization of components.

[Link to Demo](https://hesitant-history.surge.sh/)
