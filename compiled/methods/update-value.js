"use strict";

var clone = require('lodash.clonedeep');

var setDeep = require('../helpers/set-deep');

module.exports = function _updateValue(row, column) {
  return function (e) {
    var _this = this;

    var oldVal = this._getValue(row, column);

    setDeep(row, column.split('.'), getValue(e));
    var data = clone(this.data).map(function (r) {
      if (r[_this.opts.uniqueKey] === row[_this.opts.uniqueKey]) {
        return row;
      }

      return r;
    });
    this.dispatch('input', data);
    this.dispatch('update', {
      row: row,
      column: column,
      oldVal: oldVal,
      newVal: row[column]
    });
  }.bind(this);
};

function getValue(val) {
  if (val.target) {
    return val.target.type === 'checkbox' ? val.target.checked : val.target.value;
  }

  return val;
}