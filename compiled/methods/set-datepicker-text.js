"use strict";

module.exports = function (column, start, end) {
  var dateFormat = this.dateFormat(column);
  console.log("refs2.1")
  var el = typeof column === 'string' ? $(this.refs.filters[column]) : column;
  console.log("refs2.2")
  el.text(start.format(dateFormat) + " - " + end.format(dateFormat));
};