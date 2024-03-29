#todo-api-server
A very basic API written for a Todo application I created for a coding challenge.

## Technologies Used
* Express (Server)
* Nodemon (Dev)
* Mongoose (DB/Schema)
* Morgan (Logging)
* Passport (Auth)
* bCrypt (Encrypt/Decrypt)
* JWT (Tokens)

## Machine Preparation
You will need Node.js and MongoDB installed and running in your local environment.

## Usage
1. **Clone repo** - `git clone https://github.com/jaspervalero/todo-api-server.git`
2. **Install dependencies** - `npm install` (1st time only)
3. **Create 'config.js'** file in root directory with the following code to start:

        // Hold application secrets and config
        module.exports = {
            secret: '5lB8f4TF5CH5LeIK04te1I0UA1qTt7pw'
        };

    **Make sure to replace the secret's value with your own random secret string.**

    Visit http://randomkeygen.com to generate a random secret string.
4. **Launch server** - `npm run dev`
5. **Access** via `http://localhost:3090/`
