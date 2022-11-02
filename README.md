# GROWTH API

This project provides backend functionalities for growth tools in a REST alike API


## 1. Docker environments

This project comes with 2 environment mutually excuyent with two different purposes, by default on
port `4321`:

## 1.1 Dev environment

Defined inside the docker-compose file as `growth_api_dev` provides a container with node base image
as blueprint. once the container is running, the developer must log inside the container and run the instalation together runing manually the server.

Rising the container:
```
docker-compose up -d growth_api_dev
```

Loging inside:
```
docker exec -it growth_api_dev bash
```

Insalling dependences:
```
npm install
```

Running developmen server:
```
npm run dev
```

Logging out from the container:
```
exit
```

Shutting down:
```
docker-compose down growth_api_dev
```


## 1.2 QA environment

Defined inside the docker-compose file as `growth_api_test` provides a container with alike production configuration
that should provide enough tools for QA tasks.

Rising the container:
```
docker-compose up -d growth_api_test
```

Inspecting logs:
```
docker logs growth_api_test
```

Shutting down:
```
docker-compose down growth_api_test
```

## 2 .env file

Some secrets and environment configurations are available for customization inside the `.env`.
The minimum content in this file is described in the versioned `.env.example`. before raising any container
you must configure the correct values copying the `.env.example` file into `.env`.
