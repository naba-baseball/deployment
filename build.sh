#!/bin/bash
curl -fsSL https://deno.land/install.sh | sh
export PATH="/opt/buildhome/.deno/bin:$PATH"
deno --version
deno task build
exit 0