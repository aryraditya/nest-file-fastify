import { promises as fs } from "fs";
import { extname } from "path";

import { randomBytes } from "../crypto";

export const pathExists = async (path: string) => {
  try {
    await fs.stat(path);
  } catch (err) {
    return false;
  }

  return true;
};

export const getUniqueFilename = async (filename: string) => {
  const buffer = await randomBytes(16);

  const ext = extname(filename);

  return buffer.toString("hex") + ext;
};
