# Summary
The project is a full-stack E-Commerce application built with ReactJS, Redux, and Node.js with Express. It utilizes Docker for containerization, Cassandra for database storage, and Axios for API requests. 

## Personal Notes
It was quite a pleasing experience doing this. I've learned a lot of new things and worked with technologies I haven't used yet. I wish I had more time to work on it, but I tried to touch a little bit of everything.

A small TODO would look like this:
- proper styling for the cart Web Component
- implement the Edit, Add, Delete for articles
- show a proper list of the liked items and save it to DB
- create some actual unit tests, I wrote one but there are issues with importing a module
- progressive load and render for the articles list
- finish the API to work on all actions with Cassandra
- implement search
- create a bash file to start all the processes
- do some proper styling 


Steps to run the project with Cassandra:

# Step 1: Start the Cassandra container
docker run --name cassandra-container -d -p 9042:9042 cassandra

# Step 2: Initilize KEYSPACE and TABLE
run ./articles-api/data.cql

# Step 3: Populate table 
cd articles-api

## Variant A - with the data from the given articles.json file:
node insertData.js

## Variant B - with the random data from faker:
node generateData.js

# Step 4: Start backend server:
npm install
node index.js

# Step 5: Start frontend server:
cd ..
cd e-commerce-app
npm install
npm start




To run with static data:

# Step 1: Run steps 4 and 5

# Step 2: Change RunWithCassandra flag in articleActions.js to false