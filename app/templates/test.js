var expect = require('<%
    switch (assertionLibrary) {
      case 'chai':
        print ("chai').expect");
        break;

      case 'expect.js':
      default:
        print ("expect.js')");
        break;
    }
%>,
    <%= moduleVarName %> = require('..');

describe('<%= moduleName %>', function() {
  it('should export middleware creater', function() {
    expect(<%= moduleVarName %>()).to.be.a('function');
  });
});
