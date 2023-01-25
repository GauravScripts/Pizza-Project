FROM openjdk
WORKDIR usr/lib
ADD /target/discovery-server-0.0.1-SNAPSHOT.jar discovery.jar
ENTRYPOINT ["java","-jar","discovery.jar"]