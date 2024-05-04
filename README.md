# Project Title

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Brief description of your project. Include what it does, why it is useful, and any other relevant information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sahilll15/tapop_assignment.git
   cd tapop_assignment
   ```

2. Install server-side and client-side dependencies:
   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add necessary environment variables such as MongoDB connection URL, JWT secret, etc.
   - Example `.env` file:
     ```
     MONGODB_URI=mongodb://localhost:27017/my_database
     JWT_SECRET=mysecretkey
     ```

4. Run the backend server:
   ```bash
   cd ../server
   npm start
   ```

5. Run the frontend client:
   ```bash
   cd ../client
   npm start
   ```

6. Access the application:
   Open your web browser and go to `http://localhost:3000`.

## Usage

Provide instructions and examples for using your application. Include screenshots or GIFs if possible.

## Technologies

- MongoDB
- Express.js
- React.js
- Node.js
- Other technologies used in your project (e.g., Redux, Sass, Socket.io, etc.)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-feature`).
3. Make changes and commit (`git commit -am 'Add awesome feature'`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

