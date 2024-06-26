# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Start the server first 
creating todos

Name - todo
description - what kind of todo
for a new Todo:
 initiate a Todo instance variable 
 todo1 = Todo.new
to create todo 
initiate a new Todo object

save the object to database
.new-> creates a new object, but doesnt save it to database

.create-> this will impact database right away as long as no errors

resorces :todos

gives me all the crud routes for todos