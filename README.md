Adverbs
-

[![Build Status](https://travis-ci.org/rowanoulton/adverbs.svg?branch=master)](https://travis-ci.org/rowanoulton/adverbs)

Identify adverbs in a given text. This combines a number of different methods for identifying adverbs. Namely, it leverages the excellent [adverb-where](https://github.com/duereg/adverb-where) library with some additional checks.

### Installation

	npm install adverbs

### Usage

```js
var adverbs = require('adverbs');

var locations = adverbs('This is an extremely bad sentence');
// locations -> [{ index: 11, offset: 9 }]
```

### Credit

- [@btford](https://github.com/btford) and his excellent linter [write-good](https://github.com/btford/write-good).
- [@duereg](https://github.com/duereg) for his most useful [adverb-where](https://github.com/duereg/adverb-where) library.
- [iA Writer](https://ia.net/writer/mac/) and [Hemingway app](http://www.hemingwayapp.com/) for their inspiring implementations of writing software.