# Budget API

A back-end API built with Express.js for managing a budget. It allows users to create, view, update, and delete budget entries.

## Description

This project was my first project building an API. I found it very satisfying and fun to complete. Throughout this project I gained skills using RESTful API methods and am more comfortable defining basic routing methods and their route paths. Once I gain more experience, I would like to create a Front-End and use this API to create my first Full Stack application. It's featues for now include:

- Add new budget entries.
- View all budget entries.
- Update budget entries.
- Delete budget entries.
- Transfer funds between two entries.
- Customizable categories.

## API endpoints

- GET /api/budget: Retrieve all budget entries.

- GET /api/budget/:id: Retrieve a specific budget entry by ID.

- POST /api/budget: Create a new budget entry.

- POST /api/budget/:sourceId/:destinationId: Transfers funds between two entries.

- PUT /api/budget/:id: Update an existing budget entry.

- DELETE /api/budget/:id: Delete a specific budget entry.

## Getting Started

- Clone the repository.
- Make sure you have Node installed.
- Navigate to project directory and run `npm install` to install dependencies.
- Run the command `node server.js` to start the server (If everything went correctly you should see `Server listening on port 3005`.)
- To test endpoints using Postman use `http://localhost:3005` followed by the request you want to make.

  **Please note:** Right now this project can only be used solely in Postman while I work on building a Front-End.

## Why I built this

This was a portfolio project that was part of Codecademys Back-End Engineer career path that I needed to complete to earn the certificate of completion at the end.

## Technologies Used

- Node.js
- Express.js
- Postman

## Example usage

- **GET** request for all budget entries: `http://localhost:3005/envelopes`.

- **GET** request for a single entry: `http://localhost:3005/envelopes/2`.

- **POST** request to create a new entry: `http://localhost:3005/envelopes`. In Postman `raw` body (JSON format): `
{
    "title": "Leisure",
    "budget": 100
}` (you do not need to include an id property.)

- **POST** request to transfer funds: `http://localhost:3005/envelopes/1/2`. In Postman `raw` body (JSON format): `
{
    "amount": 100
}`

- **PUT** request to update entry: `http://localhost:3005/envelopes/1`. Use the same format as the POST body and update the fields you want: `{
    "title": "Leisure",
    "budget": 150
}`

## Contributor

- Jacob Rodriguez
