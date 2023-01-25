FROM openjdk
WORKDIR usr/lib
ADD /target/c3s1pcCustomer-0.0.1-SNAPSHOT.jar customers.jar
ENTRYPOINT ["java","-jar","customers.jar"]