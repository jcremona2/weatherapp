# Django Project Setup Guide

Hey there! I'll guide you through the steps to run your Django project. Let's get started!

## Prerequisites

- **Python**: Make sure you have Python installed on your computer. If you don't have it yet, no worries! You can easily download Python from the official Python website ([python.org](https://www.python.org)). Just follow the installation instructions for your operating system.

## Setup

1. **Setting up your environment**:
   - First, we need to create a virtual environment for our project. It's like a separate space where we can install project-specific dependencies without messing up our system. Open your terminal or command prompt and navigate to your project directory.
   - Now, let's create a new virtual environment named `myenv`. Run the following command:
     ```
     python -m venv myenv
     ```
     Great! Our virtual environment is all set up.

2. **Activating the virtual environment**:
   - It's time to activate our virtual environment. This step ensures that all the project dependencies are installed in the right place.
   - Depending on your operating system, run the appropriate command:
     - If you're on **Windows**, use this command:
       ```
       myenv\Scripts\activate
       ```
     - If you're on **macOS/Linux**, use this command:
       ```
       source myenv/bin/activate
       ```
     Awesome! We're now inside our virtual environment.

3. **Installing project dependencies**:
   - With our virtual environment activated, let's install the required dependencies for our project. Don't worry, we've got a handy `requirements.txt` file that lists all the necessary packages.
   - In your terminal, run the following command to install the dependencies:
     ```
     pip install -r requirements.txt
     ```
     Sit back and relax while Python takes care of installing everything for us.

4. **Running the development server**:
   - It's showtime! Let's start the Django development server and see our project in action.
   - In the terminal, run the following command:
     ```
     python manage.py runserver
     ```
     Hooray! The server should start running locally at `http://127.0.0.1:8000/` or `http://localhost:8000/`.

5. **Accessing the app**:
   - Open your web browser and navigate to `http://127.0.0.1:8000/` or `http://localhost:8000/`.
   - You should see your Django application up and running!

## Setting Up API Key for WeatherApp

To retrieve weather data from OpenWeatherMap, you will need to obtain an API key. Follow the steps below to generate an API key:

1. Visit the OpenWeatherMap website at [https://openweathermap.org/current](https://openweathermap.org/current).
2. Sign up for an account.
3. Look for the API Keys section or a similar option.
4. Create an API key to use.

Now that you have obtained the API key, follow the steps below to configure it in the WeatherApp project:

1. Navigate to the cloned repository on your local machine.
2. Inside the repository, locate the `weatherapp` directory.
3. Create a new file named `apicredentials.py` in the `weatherapp` directory.
4. Open the `apicredentials.py` file in a text editor.
5. Add the following line to the `apicredentials.py` file:
```python
API_KEY = 'YOUR_API_KEY'

## Addittional Notes

- Remember to keep your API key secure and avoid sharing it publicly or committing it to a public repository. You can use the `apicredentials.py` file to store your API key separately from the main codebase.
