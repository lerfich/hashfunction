import crypto from "crypto";
import { NONCE } from "../shared/constants.js";
import { gostEngine } from "node-gost-crypto";

export const sha256 = (value) => {
  return crypto
    .createHash("sha256")
    .update(NONCE + value)
    .digest("hex");
};

export const streebog = (value) => {
  const buffer = Buffer.from(value);
  const digest = gostEngine.getGostDigest({
    name: "GOST R 34.11",
    length: 256,
    version: 1994,
  });
  return Buffer.from(digest.digest(buffer)).toString("hex");
};
