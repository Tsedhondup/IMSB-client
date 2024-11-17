
# [IMSB](https://github.com/Tsedhondup/IMSB-API.git) 


Inventory Managment System for Book (IMSB)
## Features

- Create account
- Add book
- Filter books
- Export book lists

## Tech Stack

**Client:** React, SASS

**Server:** Node, Express, Knex

**Database:** MySQL


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- PORT=8080
- CORS_ORIGIN=http://localhost:3000 
- DB_HOST=your_db_host
- DB_NAME=secondbind_imsb

## [Installation - Back-end](https://github.com/Tsedhondup/IMSB-API.git)
Clone the repository with npm:

```bash
 git clone https://github.com/Tsedhondup/IMSB-API.git

```
Navigate into the project directory

```bash
cd IMSB-API:

```
Install dependencies:
```bash
npm install

```
database migration with npm
```bash
  npm run migrate
```
adding seed data with npm
```bash
  npm run seed
```
## [Installation - Front-end](https://github.com/Tsedhondup/imsb-client.git)

Clone the repository with npm:

```bash
 git clone https://github.com/Tsedhondup/imsb-client.git

```
Navigate into the project directory

```bash
cd imsb-client:

```
Install dependencies:
```bash
npm install

```
    
## Usage
**Server:** Navigate into the project directory

```bash
cd IMSB-API
```
Start Express Server with nodemon:
```bash
npx nodemon index.js
```
**Client:** Navigate into the project directory

```bash
cd imsb-client
```
Start React Server:
```bash
npm start
```



## Authors

- [@Tsedhondup](https://github.com/Tsedhondup)

