# typeorm-postgresql
Typescript-Express rest api

npm install
docker-compose up
npm run dev


## Environment (.env)

```
PORT=3000
POSTGRES_HOST="localhost"
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="postgres"
POSTGRES_DB="deneme"
```

## Dependencies
<ul>
<li>Database: postgres</li>
<li>Orm: typeorm</li>
<li>Logger: chalk@4.1.2</li>
</ul>


## Structure
<ul> 
<li>Db Tables: Models</li>
<li>Db Orm: Repository</li>
<li>Application service layer : Services</li>
<li>Response layer & Exceptions: Controller
</ul>
![image](https://user-images.githubusercontent.com/101109536/207129343-a78a2ab7-67bd-4b32-baca-e1b3bb72a952.png)


## docker-compose 

Adminer is run on port 127.0.0.1:8080 to visualize db

```
version: "3.1"

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: deneme
    ports:
      - "5432:5432"
  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```




