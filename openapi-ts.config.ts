export default {
  client: "fetch",
  name: "JiraCloudAPI",
  input:
    "https://dac-static.atlassian.com/cloud/jira/platform/swagger-v3.v3.json",
  output: "src/generated",
  types: {
    dates: true,
    enums: "typescript",
    name: "PascalCase",
  },
};
