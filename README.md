Install dependencies:

```sh
deno install
uv --project backend sync
```

Start backend:

```sh
uv run --project backend flask --app backend/app.py run
```

Dev server:

```sh
deno task dev
```

Build for prod:

```sh
deno task build
```

Add new js dependency:

```sh
deno add [--dev] [depdency]
```

Add new python dependency:

```sh
uv --project backend add [dependency]
```