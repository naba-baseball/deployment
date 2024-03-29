import "https://deno.land/std@0.218.2/dotenv/load.ts";
export const R2_ACCESS_KEY: string = Deno.env.get("R2_ACCESS_KEY") || '';
if (!R2_ACCESS_KEY) throw "no access key";

export const R2_SECRET_ACCESS_KEY: string = Deno.env.get("R2_SECRET_ACCESS_KEY") || '';
if (!R2_SECRET_ACCESS_KEY) throw "no secret access key";

export const R2_ENDPOINT: string = Deno.env.get("R2_ENDPOINT") || '';
if (!R2_ENDPOINT) throw "no endpoint";

export const R2_BUCKET: string = Deno.env.get("R2_BUCKET") || '';
if (!R2_BUCKET) throw "no bucket";
