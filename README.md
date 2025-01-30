# Application for APD people
This project has been developed for APD peoples 

## Prerequisites
This section contains the List of prerequisites needed to run this project
 - Python
 - NodeJS
 - Docker

## Installation
### Step 1: Clone the repository
To clone the project, run:

```bash
git clone https://github.com/HarshanaWAJ/APD_Helper_Application.git

cd APD_Helper_Application

python -m venv ml_env

- On Windows
    .\ml_env\Scripts\activate

- On Mac/Linux
    source apd_env/bin/activate

```
### Install Required Libraries
```bash
    pip install speechrecognition pydub noisereduce numpy opencv-python mediapipe tensorflow streamlit flask
    pip install imageio[ffmpeg]
    pip install flask-cors
```

### Frontend Initialization 
```bash
    cd APD_Helper_Application/client

    npm install

    npm start
```

### Server Initialization
```bash
    cd APD_Helper_Application/server
    npm install
```
### Run the backend
```bash
    python backend/app.py
```

### Run the frontend
```bash
    npm start
```