module.exports = {
  apps: [
    {
      name: "config-server",
      script: "/home/jagathanura2003/.sdkman/candidates/java/current/bin/java",
      args: "-jar /home/jagathanura2003/Capstone-platform/Capstone-config-server/target/Config-Server-1.0.0.jar",
      watch: false
    },
    {
      name: "service-registry",
      script: "/home/jagathanura2003/.sdkman/candidates/java/current/bin/java",
      args: "-jar /home/jagathanura2003/Capstone-platform/Capstone-service-registry/target/Service-Registry-1.0.0.jar",
      watch: false
    },
    {
      name: "api-gateway",
      script: "/home/jagathanura2003/.sdkman/candidates/java/current/bin/java",
      args: "-jar /home/jagathanura2003/Capstone-platform/Capstone--api-gateway/target/Api-Gateway-1.0.0.jar",
      watch: false
    }
  ]
};