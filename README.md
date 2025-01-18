Downloads a zip from Cloudflare R2 and extracts it.

## Usage

Run the `build` binary

## Local development
Create a .env file with 
```
R2_ACCESS_KEY=
R2_SECRET_ACCESS_KEY=
R2_ENDPOINT=
R2_BUCKET=
```

Run `deno task build` to run the script locally.

Run `deno task compile` to create a "release" and have CI/CD pipelines run the `build` binary
