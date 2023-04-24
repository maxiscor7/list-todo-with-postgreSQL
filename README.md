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

<p>2- Create a database with the name perntodo</p>
<p>(You can do it by opening your terminal and putting the command    psql -U postgres   to conect with postgres)</p>
<p>and you will have to enter your postgres password   *****</p>
<p>3- Enter the command:</p>
<p>CREATE DATABASE perntodo;   (this is to create the database)</p>
<p>4- Enter the command:</p>
<p>CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);</p>    
<p>(this is to create the todo table with the todo_id and description rows)</p>
<p>5- Create a folder and open it with your vsCode</p>
<p>6- Open the terminal and clone this repository</p>
<p>7- Use the command:</p>
<p>git clone https://github.com/maxiscor7/list-todo-with-postgreSQL.git</p>
<p>8- Install all the dependencies</p>
<p>9- With a terminal stopped in the server folder run nodemon index</p>
<p>10- And with another terminal stopped in the client folder use npm run</p>

<h3>*** With everything running you should see on your localhost your to do list working ***</h3>
