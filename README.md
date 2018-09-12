# Django + React Introduction

[![alt text](https://github.com/justdjango/DjReact/blob/master/thumbnail.png "Logo")](https://youtu.be/uZgRbnIsgrA)

This project is broken up into a backend and frontend. The backend contains the Django project which uses the Django Rest Framework to host a simple API. The frontend uses React and queries data from the API.

To get started:

Inside one terminal navigate to backend, create a virtualenv with `virtualenv env`, activate it and install the project requirements using `pip install -r requirements.txt`. Make sure the virtualenv path is set in the following manner according to your setup:

```json
    "python.venvPath": "${workspaceFolder}/env/bin/python3"
```

In another terminal navigate to frontend, install the dependencies using `npm i` and run the server with `npm start`. Head to http://localhost:3000 to see the application.

To navigate back to the starting code of [video 2](https://www.youtube.com/watch?v=w-QJiQwlZzU&t=4s):

```json
git init
git clone https://github.com/justdjango/DjReact.git
cd DjReact
git reset --hard 815eb83e0894d9bc5ebef66501721dc5063cf6a0
```

For video 3:

```json
git reset --hard 3030f494a799e5b7996342e5176f7c604dcf868b
```

Remove the git repo with this command on mac/linux:

```json
rm -rf .git
```

and this on windows:

```json
rmdir .git
```