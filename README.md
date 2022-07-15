# Challenge 13 - E-commerce Back-End

GIVEN a functional Express.js API

<!-- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize -->
<!-- WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data -->

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

Database Models
Your database should contain the following four models, including the requirements listed for each model

Associations
You'll need to execute association methods on your Sequelize models to create the following relationships between them:
Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
Category has many Product models.
Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.
Tag belongs to many Product models.

Fill Out the API Routes to Perform RESTful CRUD Operations
Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js to perform create, read, update, and delete operations using your Sequelize models.

Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.
