import { config } from "dotenv";
const {parsed} = config()
/** @type {string} */
export const R2_ACCESS_KEY = parsed["R2_ACCESS_KEY"] || "";
if (!R2_ACCESS_KEY) throw "no access key";

/** @type {string} */
export const R2_SECRET_ACCESS_KEY = parsed["R2_SECRET_ACCESS_KEY"] || "";
if (!R2_SECRET_ACCESS_KEY) throw "no secret access key";

/** @type {string} */
export const R2_ENDPOINT = parsed["R2_ENDPOINT"] || "";
if (!R2_ENDPOINT) throw "no endpoint";

/** @type {string} */
export const R2_BUCKET = parsed["R2_BUCKET"] || "";
if (!R2_BUCKET) throw "no bucket";
