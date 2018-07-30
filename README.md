# Django + React Introduction

[![alt text](https://github.com/justdjango/DjReact/blob/master/thumbnail.png "Logo")](https://youtu.be/uZgRbnIsgrA)

This project is broken up into a backend and frontend. The backend contains the Django project which uses the Django Rest Framework to host a simple API. The frontend uses React and queries data from the API.

To get started:

Inside one terminal navigate to backend, create a virtualenv with `virtualenv env`, activate it and install the project requirements using `pip install -r requirements.txt`. Make sure the virtualenv path is set in the following manner according to your setup:

```json
    "python.venvPath": "${workspaceFolder}/env/bin/python3"
```

In another terminal navigate to frontend, install the dependencies using `npm i` and run the server with `npm start`. Head to http://localhost:3000 to see the application.