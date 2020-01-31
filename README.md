## Installation

In the project directory run:

### 'yarn'

or

### 'npm install'

## Development mode

In the project directory run:

### `yarn dev`

or

### `npm run dev`

## Production mode

In the project directory run:

### `yarn build`

or

### `npm run build`

After that you'll get the "build" folder.

## Build production bundle and run it:

### `yarn start`

or

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To allow non-relative paths in typescript add: { // module resolution stategy:
how ts finds non-relative imports "moduleResolution": "node" // must be
specified for non-relative imports "baseUrl": ".", // from what directory ts
should look for all modules "paths": { "_": ["./src/_"] // also you can specify
here aliases, for example // "assets": ["./assets/*"] } }

"noImplicitAny" says to ts that all untyped vars have the type any; "target"
says which bundle specification (es6, es6, etc.) we'll get after the
compilation; "allowSyntheticDefaultImports": we can use import React from
'react' instead of import \* as React from 'react'
