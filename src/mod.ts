import { Spinner } from "@std/cli/unstable-spinner";
import { extractTarGz } from "./extract.ts";
import { downloadTarGz } from "./download.ts";

const spinner = new Spinner();
spinner.start();
await downloadTarGz(spinner);
await extractTarGz(spinner);
spinner.stop();
console.log("done");
