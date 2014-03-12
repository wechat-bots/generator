'use strict';
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    gitconfig = require('git-config');

var WechatBotGenerator = module.exports = function WechatBotGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(WechatBotGenerator, yeoman.generators.Base);

WechatBotGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var config = gitconfig.sync();

  var prompts = [
    {
      type: 'input',
      name: 'moduleName',
      message: 'node.js module name:',
      default: path.basename(process.cwd())
    },
    {
      type: 'input',
      name: 'moduleDesc',
      message: 'Module description'
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'Module keywords',
      filter:
        function (value) {
          return value.split(',')
            .map(function (val) {
              return val.trim();
            })
            .filter(function (val) {
              return val.length > 0;
            })
        }
    },
    {
      type: 'confirm',
      name: 'useGrunt',
      message: 'Use grunt?',
      default: true
    },
    {
      type: 'list',
      name: 'assertionLibrary',
      message: 'Assertion Library',
      choices: ['expect.js', 'chai', 'none'],
      default: 'chai'
    },
    {
      type: 'input',
      name: 'githubName',
      message: 'Your github username',
      default: (config.github && config.github.user) || ''
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author name',
      default:
        ((config.user && config.user.name) || '') +
        (' <' + ((config.user && config.user.email) || '') + '>')
    }
  ];

  this.prompt(prompts, function (props) {
    this.moduleName = this._.slugify(props.moduleName);
    this.moduleVarName = this._.camelize(props.moduleName);
    this.moduleDesc = props.moduleDesc;
    this.keywords = props.keywords;
    this.githubName = props.githubName;
    this.author = props.author;
    this.copyrightName = props.author.replace(/<[^>]*?>/gm, '').trim();
    this.assertionLibrary = props.assertionLibrary;
    this.useGrunt = props.useGrunt;

    this.dequote = function (str) {
      return str.replace(/\"/gm, '\\"');
    };

    cb();
  }.bind(this));
};

WechatBotGenerator.prototype.build = function build() {
  this.template('_package.json', 'package.json');

  if (this.useGrunt) {
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.copy('jshintrc', '.jshintrc');
  }
  this.copy('travis.yml', '.travis.yml');
  this.copy('gitignore', '.gitignore');
  this.copy('LICENSE', 'LICENSE');
  this.template('README.md', 'README.md');
};

WechatBotGenerator.prototype.testFrameworks = function testFrameworks() {
  this.mkdir('test');
  this.mkdir('test/fixtures');
  this.copy('lib.js', 'index.js');
  this.template('test.js', 'test/index.js');
};
