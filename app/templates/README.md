# <%= moduleName %>

<%= moduleDesc %>

[![build status](https://secure.travis-ci.org/<%= githubName %>/<%= moduleName %>.png)](http://travis-ci.org/<%= githubName %>/<%= moduleName %>)

## Installation

This module is installed via npm:

``` bash
$ npm install <%= moduleName %>
```

## Example Usage

``` javascript
var connect = require('connect');
var wechatBot = require('wechat-bot');

var <%= moduleVarName %> = require('<%= moduleName %>');
var bot = wechatBot();
bot.use(<%= moduleVarName %>());

var app = connect();

app.use(connect.query())
  .use(bot.wechat('my token'));
```
