import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export async function readJsonArray(filePath) {
  try {
    const fileContent = await readFile(filePath, "utf8");

    if (!fileContent.trim()) {
      return [];
    }

    const parsedContent = JSON.parse(fileContent);

    return Array.isArray(parsedContent) ? parsedContent : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function writeJsonFile(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(value, null, 2) + "\n", "utf8");
}