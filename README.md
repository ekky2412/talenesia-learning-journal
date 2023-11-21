# Talenesia Learning Journal

## Table of Contents

- [About Project](#i-about-project)
- [Project Team](#ii-project-team)
- [How to Install & Run Project](#iii-how-to-install--run-project)
- [Project Documents](#iv-how-to-install--run-project)

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

### Front-End for User

**a. Change to the Client Directory**

```bash
cd frontend-user
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

## Project Documents

- [Front End Admin Project Documentation](./frontend-admin/README.md)
- [Front End User Project Documentation](./frontend-user/README.md)
- [Back End Project Documentation](./backend/README.md)
