<img src="http://bcccore.io/css/images/module-message.png" alt="bcccore message" height="35">
# Bitcoin Message Verification and Signing for Bcccore

[![NPM Package](https://img.shields.io/npm/v/bcccore-message.svg?style=flat-square)](https://www.npmjs.org/package/bcccore-message)
[![Build Status](https://img.shields.io/travis/owstack/bcccore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bcccore-message)
[![Coverage Status](https://img.shields.io/coveralls/owstack/bcccore-message.svg?style=flat-square)](https://coveralls.io/r/owstack/bcccore-message?branch=master)

bcccore-message adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bcccore repo](https://github.com/owstack/bcccore) for more information.

## Getting Started

```sh
npm install bcccore-message
```

```sh
bower install bcccore-message
```

To sign a message:

```javascript
var bcccore = require('bcccore-lib');
var Message = require('bcccore-message');

var privateKey = bcccore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/bcccore/blob/master/CONTRIBUTING.md) on the main bcccore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/bcccore/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Bcccore is a trademark maintained by Open Wallet Stack.

