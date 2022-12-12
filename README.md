# typeorm-postgresql
Typescript-Express rest api

<ul>
<li>npm install</li>
<li>docker-compose up</li>
<li>npm run dev</li>
</ul>



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
<li>App: express</li>
<li>Cors: cors </li>
</ul>


## Structure
<ul> 
<li>Db Tables: Models</li>
<li>Db Orm: Repository</li>
<li>Application service layer : Services</li>
<li>Response layer & Exceptions: Controller
</ul>
</br>




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






