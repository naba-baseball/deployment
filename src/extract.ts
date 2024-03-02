import { ensureDir } from "https://deno.land/std@0.218.2/fs/ensure_dir.ts";
import { ensureFile } from "https://deno.land/std@0.218.2/fs/ensure_file.ts";
import { Untar } from "https://deno.land/std@0.218.2/archive/untar.ts";
import { copy } from "https://deno.land/std@0.218.2/io/copy.ts";
import { readerFromStreamReader } from "https://deno.land/std@0.218.2/io/reader_from_stream_reader.ts";
import type { Spinner } from "./deps.ts";

export async function extractTarGz(spinner: Spinner) {
  using tar = await Deno.open("./reports.tar.gz", { read: true });
  const unzippedTarStream = tar.readable.pipeThrough(
    new DecompressionStream("gzip"),
  );
  const untar = new Untar(
    readerFromStreamReader(unzippedTarStream.getReader()),
  );
  for await (const entry of untar) {
    const filename = "./dist/" + entry.fileName;
    spinner.message = "extracting..." + filename;
    if (entry.type === "directory") {
      await ensureDir(filename);
      continue;
    }
    await ensureFile(filename);
    using file = await Deno.open(filename, { write: true });
    await copy(entry, file);
  }
}
