<!-- 1 comando -->

docker run \
--name postgresHeroes \
-e POSTGRES_USER=davi \
-e POSTGRES_PASSWORD=password \
 -e POSTGRES_DB=heroes \
 -p 5432:5432 \
 -d \
 postgres

<!-- 1 comando -->

<!-- 2 comando -->

docker exec -it postgresHeroes /bin/bash

<!-- 2 comando -->

<!-- 3 comando -->

docker run --name adminer -p 8080:8080 --link postgres:postgresHeroes -d adminer

<!-- 3 comando -->

<!-- MONGO -->

<!-- 1 comando -->

docker run --name mongoHeroes -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo:4

<!-- 1 comando -->

<!-- 2 comando -->

docker run --name mongoclient -p 3000:3000 --link mongoHeroes:mongo -d mongoclient/mongoclient

<!-- 2 comando -->

<!-- 3 comando -->

sudo docker exec -it mongoHeroes mongo --host localhost -u admin -p password -authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'davi', pwd: 'password', roles: [{role: 'readWrite', db: 'herois'}]})"

<!-- 3 comando -->
