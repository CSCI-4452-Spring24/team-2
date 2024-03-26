
FROM maven:3.8.1-openjdk-17-slim AS build
WORKDIR /myproject
COPY pom.xml .

RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package 

FROM maven:3.8.1-openjdk-17-slim AS final
WORKDIR /app

COPY --from=build /myproject/target/myproject-1.0-SNAPSHOT.jar ./myproject-1.0-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "myproject-1.0-SNAPSHOT.jar"]
