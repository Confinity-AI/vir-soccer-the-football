# v0 source parity

The chat [`vir-soccer-academy-website-qVQFD5VOV6D`](https://v0.app/chat/vir-soccer-academy-website-qVQFD5VOV6D) is only fully readable when you are **signed in** to v0. Anonymous page loads do not expose the component registry id or file tree.

## How to replace this folder with a 1:1 v0 export

1. Open the chat in v0 while logged in.
2. Use **Download ZIP** (menu) or, if that is greyed out, open the v0 **Terminal** and run:
   `tar -czf project.tar.gz . --exclude=node_modules --exclude=.git`
   then download `project.tar.gz` from the file explorer.
3. Extract and copy the project **into** `sites/vir_soccer` (merge/replace), then run `npm install` and `npm run dev`.

## CLI id (if v0 shows it)

If the v0 UI shows **Copy CLI** (e.g. `npx v0 add Xy12Ab34`), run that command **from this project root** after `npx v0@latest init` succeeds — the id is **not** the chat URL slug.

## What we shipped here

- Next.js app scaffold via `npx v0@latest create` (experimental) + full **VIR Soccer | The Football** pages implemented locally so the site runs offline without v0 session access.
