# Restaurant Backend API

This is a simple RESTful API backend for managing restaurants. It uses MySQL as a database and is built with Node.js and Express.js.

## Getting Started

1. Clone this repository to your local machine
2. Install the required dependencies with `npm install`
3. Create a `.env` file in the root directory of the project and add the following variables:

    - DB_HOST=localhost
    - DB_USER=root
    - DB_PASSWORD=root
    - DB_DATABASE=test

4. Start the server with `npm start`

## Dependencies

- Express.js
- mysql
- dotenv
- cors

## Folder Structure
    .
    ├── config.js
    ├── controller.js
    ├── README.md
    ├── router.js
    ├── package.json
    └── app.js


- `app.js` - This is the main entry point for the application where the server is started and middleware is set up.
- `config.js` - This file contains the database connection details and exports a connection object.
- `controller.js` - This file contains all the controller functions for handling different API routes.
- `router.js` - This file defines all the routes for the API and maps them to their respective controller functions.

## API Routes

### GET /restaurant

Returns a list of all the restaurants in the database.

### GET /restaurant/:id

Returns the details of a specific restaurant based on its ID.

### POST /add

Adds a new restaurant to the database.

### DELETE /delete/:id

Deletes a specific restaurant from the database based on its ID.

### PUT /update/:id

Updates the details of a specific restaurant based on its ID.

## Environment Variables

The following environment variables need to be set in the `.env` file:

- `DB_HOST` - The hostname of the MySQL database.
- `DB_USER` - The username used to connect to the MySQL database.
- `DB_PASSWORD` - The password used to connect to the MySQL database.
- `DB_DATABASE` - The name of the MySQL database to use.

## Conclusion

This backend API provides a simple way to manage restaurants and their details in a MySQL database. It can be easily extended to add more functionality or to integrate with other applications.
