
---

# Pre-Employment Process (PEP) Web Application

This is a web application for the Pre-Employment Process (PEP) for ABC India, developed as a practical assignment. The application provides basic functionalities for user navigation, login, signup, and a dashboard with various sections.

## Project Structure

- **Home Page**: The landing page that provides links to `Home`, `About Us`, `Contact Us`, and `Login`.
- **About Us Page**: Displays information about ABC India.
- **Contact Us Page**: Provides contact details for ABC India.
- **Login Page**: Allows users to log in using their User ID and Password.
- **Signup Page**: Allows new users to create an account with fields like Username, Email, Mobile, and Password.
- **Dashboard Page**: Accessible only after logging in. Displays various options like Gender Master, Country Master, State Master, and City Master.
- **Change Password Page**: Allows users to change their password.
- **Logout**: Allows users to log out and redirects them to the Home Page.

## Features Implemented

1. **Navigation**: Header and footer links for easy navigation between pages.
2. **Home Page**: Basic welcome message for users.
3. **About Us and Contact Us Pages**: Informational pages with static content.
4. **Login Page**: Login form with basic validation (redirects to Dashboard on successful login).
5. **Signup Page**: Signup form with validation and password confirmation.
6. **Dashboard**: Displays various options and welcomes the user. Accessible only after login.
7. **Change Password**: Form to update the user password.
8. **Logout**: Redirects the user to the Home page.

## Technologies Used

- HTML, CSS, JavaScript for frontend
- Simple client-side JavaScript for form validation

## Getting Started

### Prerequisites

Ensure you have a modern web browser to run the application locally.

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/pep-web-application.git
   cd pep-web-application
   ```

2. **Run Locally**:
   - Open the `index.html` file in your web browser to start the application.

### File Structure

```
pep-web-application/
├── index.html             # Home Page
├── about.html             # About Us Page
├── contact.html           # Contact Us Page
├── login.html             # Login Page
├── signup.html            # Signup Page
├── dashboard.html         # Dashboard Page
├── changepassword.html    # Change Password Page
├── css/
│   └── style.css          # Main stylesheet
└── js/
    └── script.js          # JavaScript for form validation and navigation
```

### Usage

- **Home Page**: Navigate to other pages via the header and footer links.
- **Login**: Enter User ID and Password to log in. Redirects to the Dashboard on success.
- **Signup**: New users can create an account. After successful signup, they can log in to access the Dashboard.
- **Dashboard**: Shows various master options like Gender, Country, State, and City.
- **Change Password**: Allows the logged-in user to change their password.
- **Logout**: Returns the user to the Home Page.

## Future Improvements

- Implement backend authentication and session handling.
- Store user data in a database (e.g., MongoDB or PostgreSQL).
- Improve form validation and password encryption.
- Add further styling and design enhancements.

## License

This project is licensed under the MIT License.

---

### Note

This application currently uses only frontend technologies with basic form validation. In a real-world application, a backend server would handle user authentication, session management, and secure password storage.

---

Replace `yourusername` in the GitHub URL with your actual GitHub username before uploading this to GitHub. This `README.md` file provides a clear overview of the project, helping others understand the current state and setup of the application.
