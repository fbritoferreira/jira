import * as fs from "node:fs";

interface VersionJson {
  version: string;
}

function updateVersion(jsonFilePath: string, targetFilePath: string): void {
  // Read JSON file
  const jsonContent: string = fs.readFileSync(jsonFilePath, "utf-8");
  const jsonData: VersionJson = JSON.parse(jsonContent);

  // Read target file
  let targetContent: string = fs.readFileSync(targetFilePath, "utf-8");

  // Replace version in target file
  targetContent = targetContent.replace(
    /"version": "[^"]*"/,
    `"version": "${jsonData.version}"`
  );

  // Write updated content to target file
  fs.writeFileSync(targetFilePath, targetContent);

  console.log(
    `Version in '${targetFilePath}' has been updated to '${jsonData.version}'.`
  );
}

// Usage example
const jsonFilePath: string = "package.json";
const targetFilePath: string = "jsr.json";
updateVersion(jsonFilePath, targetFilePath);
