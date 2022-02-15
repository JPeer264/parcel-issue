# Install dependencies

```sh
$ npm i
```

# Reproduction

## Browser

```sh
$ npm run browser
```

http://localhost:1234 should output the correct svg

## Server

```sh
$ npm run node
# in another tab
$ npm run execute
```

The console output has the wrong path inside the `<img />`
