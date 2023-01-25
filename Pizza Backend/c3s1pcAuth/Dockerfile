FROM openjdk
WORKDIR usr/lib
ADD /target/c3s1pcAuth-0.0.1-SNAPSHOT.jar users.jar
ENTRYPOINT ["java","-jar","users.jar"]