import { AwsClient } from "https://esm.sh/aws4fetch@1.0.17";
import {
  R2_ACCESS_KEY,
  R2_BUCKET,
  R2_ENDPOINT,
  R2_SECRET_ACCESS_KEY,
} from "./env.ts";
import type { Spinner } from "./deps.ts";

export async function downloadTarGz(spinner: Spinner) {
  const client = new AwsClient({
    accessKeyId: R2_ACCESS_KEY,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
    region: "auto",
  });
  spinner.message = "fetching reports.tar.gz";
  const res = await client.fetch(
    R2_ENDPOINT + "/" + R2_BUCKET + "/reports.tar.gz",
    {
      aws: {
        signQuery: true,
      },
    },
  );
  if (!res.ok || !res.body) {
    console.error("Failed fetching signed url", await res.text());
    throw new Error("Failed fetching signed url");
  }
  spinner.message = "downloading to reports.tar.gz";
  await Deno.writeFile("./reports.tar.gz", res.body);
}
