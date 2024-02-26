# Commission Calculator Backend

This project is the backend server for the Commission Calculator Application. It is built using Node.js and Express.js to handle API requests related to calcualtions.

## Features

- Provides endpoints for calculating commissions based on input values such as sales amount and commission rate.
- Implements RESTful API design for easy integration with frontend applications.
- Utilizes Node.js and Express.js for efficient and scalable server-side development.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express.js**: A web application framework for Node.js, providing robust features for building APIs.
- **JavaScript**: The primary programming language used for backend development.

## Usage

1. Start the server:
   
   ```
    node app.js
    ```
2. The server will be running on [http://localhost:3001](http://localhost:3001) by default.

3. Use API endpoints to perform commission calculations.

## API Endpoints

- **GET /policy**: Retrieve all policy settings.
  - Response:
    ```json
    {
      "success": true,
      "message": "Data fetched successfully.",
      "items": [Array of policy objects]
    }
    ```

- **POST /policy**: Create a new policy setting.
  - Request Body:
    ```json
    {
      "property": "value"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Policy setting created successfully.",
      "item": { "created_policy_object" }
    }
    ```

- **PUT /policy/:id**: Update an existing policy setting by ID.
  - Request Body:
    ```json
    {
      "property": "new_value"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Policy setting updated successfully.",
      "item": { "updated_policy_object" }
    }
    ```

- **DELETE /policy/:id**: Delete a policy setting by ID.
  - Response:
    ```json
    {
      "success": true,
      "message": "Policy setting deleted successfully."
    }
    ```
