import { ensureDir } from "@std/fs/ensure-dir";
import { ensureFile } from "@std/fs/ensure-file";
import { UntarStream } from "@std/tar/untar-stream";
import { copy } from "@std/io/copy";
import { readerFromStreamReader } from "@std/io/reader-from-stream-reader";
import type { Spinner } from "@std/cli/unstable-spinner";

export async function extractTarGz(spinner: Spinner) {
  const untar = (await Deno.open("./reports.tar.gz", { read: true })).readable
    .pipeThrough(new DecompressionStream("gzip"))
    .pipeThrough(new UntarStream());
  for await (const entry of untar) {
    const filename = "./dist/" + entry.header.name;
    spinner.message = "extracting..." + filename;
    if (entry.header.typeflag === "directory") {
      await ensureDir(filename);
      continue;
    }
    await ensureFile(filename);
    using file = await Deno.open(filename, { write: true });
    await copy(readerFromStreamReader(entry.readable!.getReader()), file);
  }
}
