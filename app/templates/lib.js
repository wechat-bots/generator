module.exports = function <%= moduleVarName %>() {
  return function <%= moduleVarName %>(req, res, next) {
    var message = req.weixin;
    if (message) {
      return res.reply({
        type: 'text',
        content: 'hello'
      });
    } else {
      return next();
    }
  }
};
