# Back End Documentation

## Table of Content

- [Database Structure](#i-database-structure)
- [API Structure](#ii-api-structure)
- [List API Request & Response](#iii-list-api-request--response)

## i. Database Structure

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

```
{
  "noSoal"      : Number,
  "noTema"      : Number,
  "username"    : String,
  "jawaban"     : String,
  "tipeSoal"    : String
}
```

## ii. API Structure

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

## iii. List API Request & Response

### Admin

**User Object**

```
{
    "username"  : String,
    "email"     : String,
    "user_type" : String
}

```

- #### GET /api/users

  **return all users**

  - URL Params

    None

  - Data Params

    None

  - Headers

    Content-Type: application/json

  - Code 200 response :

    ```
    [
        {<user_object>},
        {<user_object>},
        ...
    ]
    ```

- ### POST /api/users

  **Create new user and return the new object**

  - URL Params

    None

  - Data Params

    ```
    {
      username : string,
      password : string,
      email : string,
      userType : string,
      birthday : date,
      education : string,
      city : string,
      phoneNo : string
    }
    ```

  - Headers

    Content-Type: application/json

  - Code 200 response :

    ```
    [
        {<user_object>}
    ]
    ```

- ### GET /api/users/:username

  **Return the specific user**

  - URL Params

    None

  - Data Params

    None

  - Headers

    Content-Type: application/json

  - Code 200 response :

    ```
    {
        <user_object>
    }
    ```

  - Code 404 Response :

    ```
    { error : "User doesn't exist" }
    ```

- ### POST /api/users/update/:id

  **Update the specific user**

  - URL Params

    None

  - Data Params

    ```
    {
      username : string,
      password : string,
      email : string,
      userType : string,
      birthday : date,
      education : string,
      city : string,
      phoneNo : string
    }
    ```

  - Headers

    Content-Type: application/json

  - Code 200 response :

    ```
    [
        {<user_object>}
    ]
    ```

- ### POST /api/users/delete/:id

  **Delete the specified user**

  - URL Params

    Required:

    - '\_id' [String]

  - Data Params

    None

  - Headers

    Content-Type: application/json

    Authorization: Bearer `<OAuth Token>`

  - Code 204 response :

    No content

  - Code 404 response :

    ```
    { "error": "User doesn't exist" }
    ```

### User

**User Object**

```
{
    "username"  : String,
    "email"     : String,
    "user_type" : String (User),
    "birthday"  : date,
    "education" : String,
    "city"      : String,
    "phoneNo"   : String
}
```

**Journal Object**

```
{
    "noSoal"    : Number,
    "noTema"    : Number,
    "username"  : String,
    "jawaban"   : date,
    "tipeSoal"  : String
}
```

**Tugas Object**

```
{
    "noTema"    : Number,
    "noTugas"   : Number,
    "username"  : String,
    "masukan"   : date,
    "sedangDikerjakan"  : Boolean,
    "sudahDikerjakan"   : Boolean
}
```

- #### GET /api/journal/:username

  **returns Journal based on the specified username**

  - URL Params

    None

  - Data Params

    None

  - Headers

    Content-Type: application/json

  - Code 200 response :

    ```
    [
        {<journal_object>},
        {<journal_object>},
        ...
    ]
    ```

- #### GET /api/journal/tugas/:username/:theme
