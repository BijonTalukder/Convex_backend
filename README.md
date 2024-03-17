# Introduction
Hare i am created simple backend using convex and express.
Convex is a Backend Application Platform that keeps you focused on building your product. Convex Functions, Database, File Storage, Scheduling, and Search fit together cohesively, and are accessible from client libraries for your favorite environment. Everything in Convex is live and realtime.[publish](https://docs.convex.dev/home)

## How To Run

Run the following command

```bash
npm app.js
```

## Base URL
ROOT URL: `http://localhost:3000`
<br>

## Endpoints

### Get all 

-   **Endpoint:** `/`
-   **Method:** `GET`
-   **Description:** fetch all items.
-   **Response:** ```json {
    "message": "Items fetched successfully",
    "data": [
        {
            "_creationTime": 1710680813867.3306,
            "_id": "j972ajnekav8bwydghyr65ajex6nf604",
            "isCompleted": true,
            "text": "Buy groceries"
        },
        {
            "_creationTime": 1710680813867.3308,
            "_id": "j97akr3qgbrsjz7sc33y169wh56netq0",
            "isCompleted": true,
            "text": "Go for a swim"
        },
        {
            "_creationTime": 1710680813867.331,
            "_id": "j976wc6rd0ajyprs3ghfj6xc7s6nenhg",
            "isCompleted": false,
            "text": "Integrate Convex"
        },
        {
            "_creationTime": 1710686089679.0994,
            "_id": "j973t9snpe2de9me2gcyxg2hhd6nf5q8",
            "isCompleted": true,
            "text": "bijon"
        },
        {
            "_creationTime": 1710686814687.1716,
            "_id": "j97d8s2xfskwt5nx4s7s9vw5tx6nfwhm",
            "isCompleted": true,
            "text": "a"
        }
    ]
}```
    <br><br>




### Get single data
- **Endpoint:** `/123`
- **Method:** `GET`
- **Description:** Fetch only single data.
- **Response:** ```json {
    "message": "Item fetch successfully",
    "data": [
        {
            "_creationTime": 1710686814687.1716,
            "_id": "j97d8s2xfskwt5nx4s7s9vw5tx6nfwhm",
            "isCompleted": true,
            "text": "a"
        }
    ]
}```
### insert new data

-   **Endpoint:** `/create`
-   **Method:** `POST`
-   **Description:** create new data in database
-   **Body:**
    ```json
{
    "text":"created new data",
    "isCompleted":true
}
    ```
    <br>


