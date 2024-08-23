module.exports = function(query) {

  var el;

  if (this.opts.filterByColumn) {

    for (var column in query) {
      if (this.isDateFilter(column)) {
        if (query[column] && typeof query[column]==='object') {
          var start = typeof query[column].start==='string'?moment(query[column].start,'YYYY-MM-DD'):query[column].start;
          var end = typeof query[column].end==='string'?moment(query[column].end,'YYYY-MM-DD'):query[column].end;

          this._setDatepickerText(column,start, end);
        } else {
          console.log("refs10.1")
          $(this.refs.filters[column]).html("<span class='VueTables__filter-placeholder'>" + this.display('filterBy',{column:this.getHeading(column)}) + "</span>");
          console.log("refs10.2")
        }
        continue;
      }
        console.log("refs11.1")
        el = this.refs.filters[column]
        console.log("refs11.2")

        if (el) {
          el.value = query[column];
        } else if (this.columns.indexOf(column)===-1) {
          console.error(`vue-tables-3: Error in setting filter value. Column '${column}' does not exist.`);
        }
    }
  } else {
    console.log("refs12.1")
    var el = this.refs.genericFilter;
    console.log("refs12.2")
    if (el)  el.value = query;
  }
}

