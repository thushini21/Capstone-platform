const path = require("path");

const isWin = process.platform === "win32";

module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java",
      args: `-jar ${isWin ? ".\\Capstone-config-server\\target\\Config-Server-1.0.0.jar" : "./Capstone-config-server/target/Config-Server-1.0.0.jar"}`,
      cwd: __dirname,
      watch: false
    },
    {
      name: "service-registry",
      script: "java",
      args: `-jar ${isWin ? ".\\Capstone-service-registry\\target\\Service-Registry-1.0.0.jar" : "./Capstone-service-registry/target/Service-Registry-1.0.0.jar"}`,
      cwd: __dirname,
      watch: false
    },
    {
      name: "api-gateway",
      script: "java",
      args: `-jar ${isWin ? ".\\Capstone--api-gateway\\target\\Api-Gateway-1.0.0.jar" : "./Capstone--api-gateway/target/Api-Gateway-1.0.0.jar"}`,
      cwd: __dirname,
      watch: false
    }
  ]
};