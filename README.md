# Talenesia Learning Journal

## Table of Contents

- [About Project](#i-about-project)
- [Project Team](#ii-project-team)
- [How to Install & Run Project](#iii-how-to-install--run-project)
- [Database Structure](#iv-database-structure)
- [API Structure](#v-api-structure)
- [List API Request & Response](#vi-list-api-request--response)

## i. About Project

### Introduction

**Talenesia Learning Journal** is a website application that built with the **MERN stack**, which includes MongoDB, Express.js, React.js, and Node.js. It was designed for students to work on learning journal assignments and helps the Talenesia admin monitor each student's progress in completing the assignments. The system also facilitates content management for each theme in the learning journal.

### Goal

The goals of this application include providing an efficient and user-friendly platform for students to complete their assignments and for admins to manage learning journal theme content.

## ii. Project Team

We collaborated as a team of 5 Front-end developers, and 2 Back-end developers. Our team is called **CP-FS-6 Talenesia (Team B)**

### Project Leader

1. Rezky Putratama Raharjo

### Front-end Developer Team\*\*

1. Rezky Putratama Raharjo - Front-end Admin (Dashboard)
2. Muhammad Raedi Radifan - Front-end Admin (Student)
3. Muhammad Fauzan - Front-end User
4. Carles Octavianus - Front-end User
5. Harish Trio A. - Front-end User

### Back-end Developer Team

1. Alfito De Vaga Mayavanny
2. Rezky Putratama Raharjo

## iii. How to Install & Run Project

Make sure you have Node.js and npm installed on your system before continuing.

### Back-End

**a. Change to the Client Directory**

```bash
cd backend
```

**b. Install Dependencies**

```bash
npm install
```

**c. Edit the .env file to configure your MongoDB connection and PORT**

```bash
MONGODB_URI=YOUR_MONGODB_URL
PORT=3000
```

The server will run at <http://localhost:3001>.

This option required this command in package.json, inside the `scripts`:

```bash
"start": "nodemon index.js"
```

**d. Run the Server**

```bash
npm start
```

### Front-End for Admin

**a. Change to the Client Directory**

```bash
cd frontend-admin
```

**b. Install Dependencies**

```bash
npm install
```

**c. Edit the .env file to configure the server's API endpoint**

```bash
REACT_APP_API_ENDPOINT=http://localhost:3001
```

**d. Run the Server**

```bash
npm start
```

## iv. Database Structure

In this project, we use MongoDB database to store our data with 3 main collections called `users`, `tugas`, and `journals`. The structure of the collections is as follows:

### `users` collection

```
{
  "username"    : String,
  "password"    : String,
  "email"       : String,
  "userType"    : String (Admin/User),
  "birthday"    : date OPTIONAL,
  "education"   : String OPTIONAL,
  "city"        : String OPTIONAL,
  "phoneNo"     : String OPTIONAL
}
```

### `tugas` collection

```
{
  "noTema"              : Number,
  "noTugas"             : Number,
  "username"            : String,
  "masukan"             : String,
  "sedangDikerjakan"    : Boolean,
  "sudahDikumpulkan"    : Boolean
}
```

### `journals` collection

```json
{
  "noSoal"      : Number,
  "noTema"      : Number,
  "username"    : String,
  "jawaban"     : String,
  "tipeSoal"    : String
}
```

## v. API Structure

The API is built using Node.js and Express.js. The API supports the following endpoints:

### **Admin**

```
GET     /api/users
POST    /api/users
GET     /api/users/:username
POST    /api/users/update/:id
POST    /api/users/delete/:id
```

### **User**

```
GET     /api/journal/:username
GET     /api/journal/tugas/:username/:theme
POST    /api/journal/tugas/:username/:theme
GET     /api/journal/:username/:theme
GET     /api/journal/:username/:theme/:section
POST    /api/journal/:username/:theme/:section
POST    /api/login/auth
```

## vi. List API Request & Response

### Admin

**User Object**

```json
{
    "username": String,
    "email":String,
    "user_type": String
}

```

- #### GET /api/users

  **return all users**

  - URL Params

    None

  - Body Params

    None

  - Headers

    Content-Type: application/json

  - Code 200 response :

    ```json
    {
        {<user_object>},
        {<user_object>},
        ...
    }
    ```

- POST /api/users

  **Add new user**

  - URL Params

    > username = [String] **REQUIRED**, \
    > password = [string] **REQUIRED**, \
    > email = [string] **REQUIRED**, \
    > userType = [string] (user / admin) **REQUIRED**,\
    > birthday = date **OPTIONAL**, \
    > education = [string] **OPTIONAL**, \
    > city = [string] **OPTIONAL**, \
    > phoneNo = [string] **OPTIONAL**

  - Body Params

    ```json
    username : string,
    password : string,
    email : string,
    userType : string,
    birthday : date,
    education : string,
    city : string,
    phoneNo : string
    ```

  - Headers

    Content-Type: application/json

  - Code 200 response :

    ```json
    {
        {<user_object>},
        {<user_object>},
        ...
    }
    ```
