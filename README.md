Creating a REST API documentation involves documenting the endpoints, request methods, request payloads, response payloads, and any additional information for each endpoint. Below is an example of a simple documentation for your Node.js-based RESTful API for managing books. 

[Demo-1](https://www.awesomescreenshot.com/video/22135984?key=47c1f34f494b87a8bcd89765f18241db)
[Demo-2-Drive](https://drive.google.com/file/d/1cMWvwi0wUMUvXuD9PabYBNXZxuT7vgVh/view?usp=sharing)
---

# Book Management API Documentation

This API allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. Users must be authenticated to use the API by registering or logging in. JWT tokens are used for authentication. The API is deployed on Vercel.

## Table of Contents
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [Register a User](#register-a-user)
  - [Login](#login)
  - [Book Operations](#book-operations)
    - [Create a Book](#create-a-book)
    - [Get a Book](#get-a-book)
    - [Get All Books](#get-all-books)
    - [Update a Book](#update-a-book)
    - [Delete a Book](#delete-a-book)

## Authentication

All endpoints except for registration and login require the user to be authenticated. Authentication is handled through JWT tokens.

### Register a User

- **Endpoint**: `POST /api/v1/auth/register`
- **Description**: Register a new user.
- **Request Payload**:
  - `username` (string): The username of the new user.
  - `password` (string): The password of the new user.
- **Response Payload**:
  - `message` (string): A success message.

### Login

- **Endpoint**: `POST /api/v1/auth/login`
- **Description**: Log in an existing user to obtain a JWT token for authentication.
- **Request Payload**:
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
- **Response Payload**:
  - `message` (string): A success message.
  - `token` (string): The JWT token for authentication.

## Book Operations

### Create a Book

- **Endpoint**: `POST /api/v1/book/addbook`
- **Description**: Create a new book.
- **Authentication**: Required
- **Request Payload**:
  - `title` (string): The title of the book.
  - `author` (string): The author of the book.
  - `summary` (string): A description of the book.
- **Response Payload**:
  - `message` (string): A success message.
  - `book` (object): The created book object.

### Get a Book

- **Endpoint**: `GET /api/v1/book/singlebook/:bookId`
- **Description**: Retrieve information about a specific book.
- **Authentication**: Required
- **Response Payload**:
  - `book` (object): The book object.

### Get All Books

- **Endpoint**: `GET /api/v1/book/getallbooks`
- **Description**: Retrieve a list of all books.
- **Authentication**: Required
- **Response Payload**:
  - `books` (array of objects): A list of book objects.

### Update a Book

- **Endpoint**: `PUT /api/v1/book/update/:bookId`
- **Description**: Update information about a specific book.
- **Authentication**: Required
- **Request Payload**:
  - `title` (string): The updated title of the book.
  - `author` (string): The updated author of the book.
  - `description` (string): The updated description of the book.
- **Response Payload**:
  - `message` (string): A success message.
  - `book` (object): The updated book object.

### Delete a Book

- **Endpoint**: `DELETE /api/v1/book/delete/:bookId`
- **Description**: Delete a specific book.
- **Authentication**: Required
- **Response Payload**:
  - `message` (string): A success message.

---

