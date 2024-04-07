# Singe Table Inheritance (TypeORM)

This repository contains the source code for an example of Single Page Inheritance in TypeORM.

## Table of Contents

- [Description](#Description)

- [Develop](#Develop)

- [Contributing](#Contributing)

## Description

The repository comprises the following **stack**:

- **NestJS as the Node.js Framework** <br/>
  It utilizes TypeScript for robust type checking and offers features such as modular architecture, dependency injection, and built-in support for HTTP routing. Ideal for APIs, microservices, and full-stack applications, NestJS promotes structured and maintainable codebases.

- **PostgreSQL as a Database** <br/>
  Open-source relational database management system renowned for its reliability, performance, and standards compliance. Its advantages include high reliability, extensibility, optimized performance, standards compliance, JSON support, and an active developer community.

- **TypeORM as the ORM Library** <br/>
  TypeORM is built for TypeScript and is recommended when using TypeScript in a project, hence the usage in this project.

- **Docker for Containerization** <br/>
  Docker is included in the stack for creating, deploying, and managing containers. It provides a consistent and portable environment, simplifying the development, testing, and deployment processes.

## Develop

### Requirements

Backend example built using **NestJS** as a framework, using **TypeORM** as an ORM, **PostgreSQL** as a Database and using **Docker** to containerize both the application and his database.

To develop, you will need the to install the following on your computer:

- Node.js (v20.11.1) or higher

Clone this repository and navigate to it.

```bash
$ git clone git@github.com:tfig-dev/single-table-inheritance-typeORM.git

$ cd single-table-inheritance-typeORM
```

### Installation

Install all the project dependencies.

```bash
$ yarn
```

### Required environment variables

You had to create a `.env` local file in the repository directory with the following content (as an example):

```Typescript
#DATABASE
DATABASE_TYPE=postgres
DATABASE_HOST=127.0.0.1
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=databaseName
POSTGRES_PORT=5432

#DATABASE ACCESS
PGADMIN_DEFAULT_EMAIL=mailtest@mail.com
PGADMIN_DEFAULT_PASSWORD=mailpassword

#FRONTEND
NEST_PORT=3000
```

Otherwise, you have to enter the values manually in all the files, like `main.ts` and `docker-compose.yml`, where the variables are being used. _(Not recommended)_

### Running database container

```bash
$ docker-compose up -d
```

### Running the app

To run the application in develop mode.

```bash
$ yarn start:dev
```

## Contributing

This project is still under development.

### Contributors

- Tiago Figueiredo - [@tfig-dev](https://github.com/tfig-dev) (maintainer and creator)
