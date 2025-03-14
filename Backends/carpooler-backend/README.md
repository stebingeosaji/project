# Carpooler Backend

## Overview
The Carpooler backend is a Node.js application built with Express that provides authentication and user management for a carpooling service. It allows users to register, log in, and manage their profiles.

## Project Structure
```
carpooler-backend
├── src
│   ├── controllers
│   │   └── authController.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── models
│   │   └── userModel.js
│   ├── app.js
│   └── config
│       └── db.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd carpooler-backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables. Example:
   ```
   PORT=5001
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:5001`.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.