# generator-wechat-bot

A wechat-bot module scaffolding generator using [Yeoman](http://yeoman.io).

Modified from [generator-nodejs](https://github.com/eugeneware/generator-nodejs).

[![Build Status](https://secure.travis-ci.org/wechat-bots/generator.png?branch=master)](https://travis-ci.org/wechat-bots/generator)

### Installation

To install generator-wechat-bot from npm, run:

```
$ npm install -g generator-wechat-bot
```

Finally, initiate the generator:

```
$ yo wechat-bot
```

This generator now supports
[mocha](https://github.com/visionmedia/mocha)
as test frameworks.

It also supports [expect.js](https://github.com/learnboost/expect.js),
[chai](https://github.com/chaijs/chai) and 'none' for assertion libraries for
BDD style tests.

This generator will install the following files:

* package-json - initialized with the answers to all your questions.
* Gruntfile.js (if grunt is selected) - configured to use the following grunt modules:
    * grunt-complexity - show code complexity
    * grunt-contrib-jshint - run code through jshint
    * grunt-contrib-watch - watch for changes then run tests
    * grunt-mocha-cli (if mocha is selected as a test framework) - run mocha
      tests (because `mocha -w` sucks)
* .jshintrc - with some sane defaults (for me anyway!)
* .travis.yml - set up so you can push and get [travis-ci](http://travis-ci.org)
   continous integration tests.
* .gitignore - ignore the usual cruft.
* LICENSE - BSD-3-Clause initialized with your details.
* README.md - Initialized with your details and travis-ci badges.
* index.js - Initial library file
* test/index.js - First unit test
