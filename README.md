# MERN STACK E-COMMERCE

## Fullstack Responsive E-COMMERCE Website 2024

### Getting Started:
Runs the app in the development mode.
Open http://localhost:4000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.
This is an e-commerce project that is divided into three folders:
backend: This folder contains the server-side code. To run the server, start the backend folder and then go to localhost:4000 in your web browser. This will provide an API that the other two folders (admin and frontend) can use to perform actions such as signing up for the site, purchasing products, downloading products, and viewing the shopping cart.

**admin**: This folder contains a web application that allows administrators to manage the site. To run the admin application, start the admin folder and then go to localhost:4000 in your web browser.

**Frontend**: This folder contains a web application that allows users to browse and purchase products. To run the frontend application, start the frontend folder and then go to localhost:5000 in your web browser.
![image](https://github.com/Orel7777/E-commerce_Shop/assets/124579830/ac3bcd13-2da1-4974-935e-aa830d490163)

### Installation
To install the project, you will need to have Node.js and npm installed on your computer. Once you have those installed, you can clone the project and run the following commands in the project directory:

### npm install
   This will install all of the dependencies for the project.

### MongoDB Connection
To connect to the MongoDB database, you will need to use MongoDB Atlas. Follow these steps:

1. Create an account on MongoDB Atlas: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and get the connection string.
3. In the backend folder, create a `.env` file if it doesn't already exist.
4. Add the following line to the `.env` file:
    ```
    MONGO_URI=your_mongo_connection_string
    ```
5. Replace `your_mongo_connection_string` with your actual MongoDB connection string, including the username and password for your MongoDB Atlas user.

### Running the project
To run the project, you can run the following commands in the project directory:
node index.js
npm run dev 

### This will start the server, admin application, and frontend application, respectively.

### Using the project
Once the project is running, you can use the following URLs to access the different parts of the project:

You can use the server API to perform actions such as signing up for the site, purchasing products, downloading products, and viewing the shopping cart. You can use the admin application to manage the site, such as adding and editing products. You can use the frontend application to browse and purchase products.

### Additional notes
The project is written in JavaScript and uses the Express framework for the server, React for the admin application.
The project uses a MongoDB database to store data.
The project is configured to use HTTPS, so you will need to have a valid SSL certificate installed in order to run it.
I hope this helps! Let me know if you have any other questions.
