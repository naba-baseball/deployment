import { ensureDir } from "fs-extra";
import * as tar from 'tar'

/** @param {import('yocto-spinner').Spinner} spinner */
export async function extractTarGz(spinner) {
  await ensureDir('./dist')
  spinner.text = 'extracting reports.tar.gz'
  await tar.x({
    file: './reports.tar.gz',
    cwd: './dist',
  })

}
