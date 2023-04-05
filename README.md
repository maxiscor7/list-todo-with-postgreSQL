# list-todo-with-postgreSQL

![list](https://user-images.githubusercontent.com/99894721/229925465-671257e1-ba80-4551-b95a-9f0f51d6ec2f.png)





<h1>The project idea</h1>

<p>
The idea of this app was to put into practice the knowledge learned to make the connection between the client and the server, in this case we use postgres to store the data.
It is a simple to-do list app, in which we can create, delete, and edit our to-do's</p>

<h4>Technologies and tools used</h4>

<h2>Front-end:</h2>
<div style="display: flex">
<img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=ffffff">
<img src="https://img.shields.io/badge/-React-000000?style=flat&logo=react&logoColor=00c8ff">
<img src="https://img.shields.io/badge/-Bootstrap-6c25be?style=flat&logo=bootstrap&logoColor=ffffff">
</div>


<h2>Back-end:</h2>
<div style="display: flex">
<img src="http://img.shields.io/badge/-PostgreSQL-3366ff?style=flat&logo=PostgreSQL&logoColor=white">
<img src="https://img.shields.io/badge/-Express.js-787878?style=flat">
<img src="https://img.shields.io/badge/-Node.js-3C873A?style=flat&logo=Node.js&logoColor=white">
<img src="http://img.shields.io/badge/-Git-F1502F?style=flat&logo=git&logoColor=FFFFFF">
<img src="http://img.shields.io/badge/-Github-000000?style=flat&logo=github&logoColor=FFFFFF">
<img src="http://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual%20studio%20code&logoColor=white">
</div>


<h2>Tools:</h2>
<div style="display: flex">
<img src="http://img.shields.io/badge/-Git-F1502F?style=flat&logo=git&logoColor=FFFFFF">
<img src="http://img.shields.io/badge/-Github-000000?style=flat&logo=github&logoColor=FFFFFF">
<img src="http://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual%20studio%20code&logoColor=white">
</div>

<h1>Install & run</h1>
<h4>********** Steps to install and run app **********</h4>

<p>1- You need to have postgreSQL installed</p>
<div>
<p>2- Create a database with the name perntodo</p>
<p>(You can do it by opening your terminal and putting the command    psql -U postgres   to conect with postgres)</p>
<p>and you will have to enter your postgres password   *****</p>
<p>3- Enter the command:</p>
<p>CREATE DATABASE perntodo;   (this is to create the database)</p>
<p>4- Enter the command:</p>
<p>
Create a table with the name todo and inside an todo_id and a description <br/> CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);</p>    
<p>(this is to create the todo table with the todo_id and description rows)</p>

</div>
