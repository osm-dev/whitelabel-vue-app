# White label ready VueJS app
**This repo was created as a proof of concept of a whitelabel architecture for VueJs apps.**
<br>
The structure is pretty straightforward. We create versions of the components we want to have interchangeable and during the build we specify alias and the files (`whitelabel.config.js`) that should be used for each company accordingly to the their suffix in each `.env` file. Inside our components, when we want to use a interchangeable component we just import it's alias, the same goes for CSS.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve:A
npm run serve:B
```

### Compiles and minifies for production
```
npm run build:A
npm run build:B
```

### Lints and fixes files
```
npm run lint
```
