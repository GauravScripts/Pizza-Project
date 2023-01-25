FROM openjdk
WORKDIR usr/lib
ADD /target/apigw-0.0.1-SNAPSHOT.jar apigateway.jar
ENTRYPOINT ["java","-jar","apigateway.jar"]