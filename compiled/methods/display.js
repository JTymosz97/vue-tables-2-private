"use strict";

module.exports = function (text, replacements) {
  if (!this.opts.texts) return '';
  var text = this.opts.texts[text];
  if (replacements) for (var key in replacements) {
    text = text.replace('{' + key + '}', replacements[key]);
  }
  return text;
};