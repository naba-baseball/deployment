import { AwsClient } from "aws4fetch";
import {writeFile} from 'node:fs/promises'
import {
  R2_ACCESS_KEY,
  R2_BUCKET,
  R2_ENDPOINT,
  R2_SECRET_ACCESS_KEY,
} from "./env.js";

/** @param {import('yocto-spinner').Spinner} spinner */
export async function downloadTarGz(spinner) {
  const client = new AwsClient({
    accessKeyId: R2_ACCESS_KEY,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
    region: "auto",
  });
  spinner.text = "fetching reports.tar.gz";
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
  spinner.text = "downloading to reports.tar.gz"
  await writeFile("./reports.tar.gz", res.body);
}
