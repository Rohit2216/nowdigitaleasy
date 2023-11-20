# Project Title
This project is a Node.js application for managing users using MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for user data.

- [Backend_Deployed_Link](https://nowdigitaleasy-xx2c.onrender.com/)

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a Node.js application for managing users using MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for user data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB server running.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rohit2216/nowdigitaleasy.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB connection by updating the `config/db.js` file with your MongoDB URI.

## Usage

To run the application, use the following command:

```bash
npm run server
```

The server will start, and you can access the API at `http://localhost:5001`.

## API Endpoints

### Create User

- **Endpoint:** `POST /createuser`
- **Request Body:**

  ```json
  {
    "name": "John Doe",
    "role": "Admin",
    "email": "john.doe@example.com",
    "phone": "123-456-7890"
  }
  ```

- **Response:**

  ```json
  {
    "status": true,
    "msg": "User created successfully"
  }
  ```

### Get All Users

- **Endpoint:** `GET /getuser`
- **Response:**

  ```json
  {
    "status": true,
    "msg": [Array of user details]
  }
  ```

### Get User by ID

- **Endpoint:** `GET /getuser/:id`
- **Response:**

  ```json
  {
    "status": true,
    "msg": { User details }
  }
  ```

### Delete User

- **Endpoint:** `DELETE /deleteuser/:id`
- **Response:**

  ```json
  {
    "status": true,
    "msg": "User deleted successfully"
  }
  ```

### Update User

- **Endpoint:** `PUT /updateuser/:id`
- **Request Body:**

  ```json
  {
    "name": "Updated Name",
    "role": "Updated Role",
    "email": "updated.email@example.com",
    "phone": "987-654-3210"
  }
  ```

- **Response:**

  ```json
  {
    "status": true,
    "msg": "User updated successfully",
    "user": { Updated User details }
  }
  ```

## Contributing

Feel free to contribute to this project. Fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

