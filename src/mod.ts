import { extractTarGz } from "./extract.ts";
import { downloadTarGz } from "./download.ts";
import { Spinner } from "./deps.ts";

const spinner = new Spinner();
spinner.start();
await downloadTarGz(spinner);
await extractTarGz(spinner);
spinner.stop();
console.log("done");
