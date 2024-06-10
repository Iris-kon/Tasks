# About

A Study project of a task manager.

The application was developed with React and Node/Express applying the following concepts:
<ul>
  <li>API REST</li>
  <li>JWT Authentication</li>
  <li>Database manipulation</li> 
  <li>offline data persistion</li>
</ul>

## Screens
<b>Login:</b>

![login](https://github.com/Iris-kon/Tasks/blob/master/tasks-frontend/assets/design/tasks-login.jpg?raw=true)

<b>Register:</b>

![register](https://github.com/Iris-kon/Tasks/blob/master/tasks-frontend/assets/design/tasks-register.jpg?raw=true)

<b>Home:</b>

![home](https://github.com/Iris-kon/Tasks/blob/master/tasks-frontend/assets/design/tasks-home.jpg?raw=true)

<b>New Task:</b>

![new-task](https://github.com/Iris-kon/Tasks/blob/master/tasks-frontend/assets/design/tasks-new-task.jpg?raw=true)

<b>Navigation:</b>

![nav](https://github.com/Iris-kon/Tasks/blob/master/tasks-frontend/assets/design/tasks-nav.jpg?raw=true)

## Used Technologies
The project utilises the following technologies:
<ul>
  <li>React Native</li>
  <li>Motion</li>
  <li>JavaScript</li>
  <li>NodeJs</li>
  <li>Express</li>
  <li>Knex</li>
  <li>Postgres</li>
</ul>

## Run project
Copy the project to the desired folder with the following command:

### `git clone https://github.com/Iris-kon/Tasks`

Create a new database in postgres with the name `tasks` or a name of your preference

Go to the backend folder

Adjust the knexconfig.js file to your db connection string

Install dependences with:

### `yarn install` or `npm install`

after, run the backend on localhost:

```
# Iniciate backend with:
$ yarn start or `npm run start`
```

Go to the frontend folder

adjust the common.js server ip to your local ip

if you don't know your ip run ipconfig comand in CMD and copy the IPv4 and paste on the ip on common

for runing the project you will need a IOS or android device, [how to setup the device](https://reactnative.dev/docs/running-on-device)

after, run the frontend with:

```
# Iniciate frontend with:
$ yarn start or `npm run start`
```
