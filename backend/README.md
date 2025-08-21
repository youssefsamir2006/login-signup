# Backend for Car Dealership and Real Estate Site

This is the Node.js backend for the MEAN stack application. It provides a RESTful API to the Angular frontend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. You also need a [MongoDB](https://www.mongodb.com/) database. You can use a local installation or a cloud service like MongoDB Atlas.

### Installation

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1.  Create a `.env` file in the `backend` directory by copying the `.env.example` file.

    ```bash
    cp .env.example .env
    ```

2.  Open the `.env` file and replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

    ```
    MONGO_URI=your_mongodb_connection_string_here
    ```

### Running the server

To start the backend server, run the following command in the `backend` directory:

```bash
npm start
```

The server will start on port 5000 (or the port specified in your environment). You should see a message in the console saying "Server is running on port: 5000" and "MongoDB database connection established successfully".

## API Endpoints

### Features

*   **GET /api/features**

    Retrieves a list of all features.

    **Example response:**
    ```json
    [
        {
            "_id": "62c4c8a0c8b4f0b8f8a0b0a0",
            "title": "Wide Selection",
            "description": "Explore a vast range of cars and real estate properties from trusted sellers.",
            "icon": "fa-solid fa-car",
            "createdAt": "2022-07-05T20:00:00.000Z",
            "updatedAt": "2022-07-05T20:00:00.000Z",
            "__v": 0
        },
        ...
    ]
    ```

## Testing with Postman

You can use [Postman](https://www.postman.com/) to test the API endpoints.

1.  Open Postman.
2.  Create a new request.
3.  Set the request type to **GET**.
4.  Enter the URL: `http://localhost:5000/api/features`.
5.  Click the "Send" button.

You should see the JSON response with the list of features in the response body.
