# WIP: micro-frontends
example repo for micro frontends with react and dependency inversion as integration pattern

!!! This repo is still work in progress, do not use it yet

## Slides
Uses [demoit](https://github.com/dgageot/demoit "demoit") and Go

1. Install [Go](https://golang.org/ "Go")
2. Start with ./demoit demo

Instead of installing Go, you can also build the docker image and run the slides within a container.

```bash
docker build -t micro-frontends:latest .
./run-demo.sh
```

## ToDos
### Tests and Test-Setup
### I18next
1. Update
2. use scoped packages
3. remove additional provider in initializers
4. remove @dm/i18next
### Store/Hooks
1. remove @dm/store libs
2. use scoped packages and updates libs or introduce react hooks
### search-api
search-api without globals and replace flow with typescript
### README.md
write README.md
### scripts
write start and build scripts in root package.json 
### error handling
add example and test it
### layout
optimization, evt. remove react-bootstrap
