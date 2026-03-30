module.exports = {
  apps: [
    {
      name: "config-server",
      script: "C:\\Users\\Thushini Akashi\\.jdks\\ms-25.0.2\\bin\\java.exe",
      args: "-jar ./Capstone-config-server/target/Config-Server-1.0.0.jar"
    },
    {
      name: "service-registry",
      script: "C:\\Users\\Thushini Akashi\\.jdks\\ms-25.0.2\\bin\\java.exe",
      args: "-jar ./Capstone-service-registry/target/Service-Registry-1.0.0.jar"
    },
    {
      name: "api-gateway",
      script: "C:\\Users\\Thushini Akashi\\.jdks\\ms-25.0.2\\bin\\java.exe",
      args: "-jar ./Capstone--api-gateway/target/Api-Gateway-1.0.0.jar"
    }
  ]
};