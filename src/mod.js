import yoctoSpinner from "yocto-spinner";
import { extractTarGz } from "./extract.js";
import { downloadTarGz } from "./download.js";

const spinner = yoctoSpinner().start();
await downloadTarGz(spinner);
await extractTarGz(spinner);
spinner.success('done');
