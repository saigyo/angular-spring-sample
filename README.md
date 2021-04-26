# angular-spring-sample

![Maven CI](https://github.com/saigyo/angular-spring-sample/actions/workflows/java-ci.yml/badge.svg)

A simple sample app that demonstrates how to package a Spring Boot app with an Angular frontend client.
The sample code is an extended derivation of the code presented in the article 
[Building a Web Application with Spring Boot and Angular](https://www.baeldung.com/spring-boot-angular-web).

## Build

```shell
mvn clean package
```

We use the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) to build and package the Angular frontend from maven.

## Run

```shell
mvn spring-boot:run
```

then open a browser at http://localhost:8080

![Screenshot](https://github.com/saigyo/angular-spring-sample/blob/master/docs/angular-sample-app.png?raw=true)

## Tech Stack

- Maven
- Java 11
- Spring Boot
- H2 in-memory database
- Angular 10
- Bootstrap
