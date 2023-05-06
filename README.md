MERN Recipe App
This is a full-stack web application built using the MERN stack, which stands for MongoDB, Express, React, and Node.js. The purpose of this application is to allow users to browse and search for recipes, create and save their own recipes, and share recipes with others.

Installation
To run this application locally, please follow these steps:

Clone this repository to your local machine
Navigate to the root directory of the application in your terminal
Run npm install to install all the dependencies
Create a .env file in the root directory of the application and set the following environment variables:
MONGO_URI - the connection string for your MongoDB database
JWT_SECRET - a secret key used for JSON Web Tokens
Run npm run dev to start the development server
Usage
Once the application is running, you can access it by opening a web browser and navigating to http://localhost:3000. You can create an account, browse recipes, and create your own recipes.

Authentication
Authentication is handled using JSON Web Tokens (JWT). When you create an account or log in, a JWT is generated and stored in a cookie in your browser. This JWT is used to authenticate your requests to the server.

Searching and Browsing Recipes
You can search for recipes by entering a keyword in the search bar at the top of the page. You can also browse recipes by clicking on one of the categories in the sidebar.

Creating and Saving Recipes
To create a new recipe, click on the "New Recipe" button in the top right corner of the page. Fill in the details of your recipe, including the ingredients and instructions. You can also upload a photo of your recipe. Once you have created your recipe, you can save it and it will be added to your list of saved recipes.

Contributing
If you would like to contribute to this project, please feel free to submit a pull request.
