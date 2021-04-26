# angular-spring-sample

![Maven CI](https://github.com/saigyo/angular-spring-sample/actions/workflows/java-ci.yml/badge.svg)

A simple sample app that demonstrates how to package a Spring Boot app with an Angular frontend client.
The sample code is an extended derivation of the code presented in the article 
[Building a Web Application with Spring Boot and Angular](https://www.baeldung.com/spring-boot-angular-web).

## Build

```shell
maven clean package
```

We use the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) to build and package the Angular frontend from maven.

## Run

```shell
maven spring-boot:run
```

then open a browser on http://localhost:8080

## Tech Stack

- Maven
- Java 11
- Spring Boot
- H2 in-memory database
- Angular 10
- Bootstrap
