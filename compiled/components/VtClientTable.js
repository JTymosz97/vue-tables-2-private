"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default2;

var _vue = require("vue");

var _VtPerPageSelector = _interopRequireDefault(require("./VtPerPageSelector"));

var _VtTable = _interopRequireDefault(require("./VtTable"));

var _VtPagination = _interopRequireDefault(require("./VtPagination"));

var _VtDropdownPagination = _interopRequireDefault(require("./VtDropdownPagination"));

var _VtGenericFilter = _interopRequireDefault(require("./VtGenericFilter"));

var _VtColumnsDropdown = _interopRequireDefault(require("./VtColumnsDropdown"));

var _VtPaginationCount = _interopRequireDefault(require("./VtPaginationCount"));

var _Observer = _interopRequireDefault(require("./Observer"));

var _emittedEvents = _interopRequireDefault(require("../helpers/emitted-events"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default2(RLClientTable) {
  return {
    name: 'VtClientTable',
    emits: _emittedEvents["default"].concat(['update', 'input']),
    components: {
      VtPerPageSelector: _VtPerPageSelector["default"],
      VtTable: _VtTable["default"],
      VtPagination: _VtPagination["default"],
      VtDropdownPagination: _VtDropdownPagination["default"],
      VtColumnsDropdown: _VtColumnsDropdown["default"],
      VtGenericFilter: _VtGenericFilter["default"],
      RLClientTable: RLClientTable,
      VtPaginationCount: _VtPaginationCount["default"]
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        "default": function _default() {
          return {};
        }
      }
    },
    methods: {
      setLoadingState: function setLoadingState(isLoading) {
        console.log("///////////1")
        this.$refs.table.loading = isLoading;
        console.log("///////////1")
      },
      setFilter: function setFilter(val) {
        console.log("///////////2")
        this.$refs.table.setFilter(val);
        console.log("///////////2")
      },
      setPage: function setPage(val) {
        console.log("///////////3")
        this.$refs.table.setPage(val);
        console.log("///////////3")
      },
      setOrder: function setOrder(column, asc) {
        console.log("///////////4")
        this.$refs.table.setOrder(column, asc);
        console.log("///////////4")
      },
      setLimit: function setLimit(limit) {
        console.log("///////////5")
        this.$refs.table.setLimit(limit);
        console.log("///////////5")
      },
      toggleChildRow: function toggleChildRow(rowId) {
        console.log("///////////6")
        this.$refs.table.toggleChildRow(rowId);
        console.log("///////////6")
      },
      getOpenChildRows: function getOpenChildRows() {
        var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        console.log("///////////7")
        let x = this.$refs.table.getOpenChildRows(rows);
        console.log("///////////7")
        return x
      },
      resetQuery: function resetQuery() {
        console.log("///////////8")
        this.$refs.table.resetQuery();
        console.log("///////////8")
      },
      setCustomFilters: function setCustomFilters(params) {
        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        console.log("///////////9")
        let x =  this.$refs.table.setCustomFilters(params, sendRequest);
        console.log("///////////9")
        return x
      },
      downloadCsv: function downloadCsv() {
        var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'table.csv';
        console.log("///////////10")
        let x =  this.$refs.table.downloadCsv(filename);
        console.log("///////////10")
        return x
      }
    },
    computed: {
      filteredData: function filteredData() {
        console.log("///////////11")
        let x =  this.$refs.table.filteredData;
        console.log("///////////11")
        return x
      },
      allFilteredData: function allFilteredData() {
        console.log("///////////12")
        let x =  this.$refs.table.allFilteredData;
        console.log("///////////12")
        return x
      },
      filtersCount: function filtersCount() {
        console.log("///////////13")
        let x =  this.$refs.table.filtersCount;
        console.log("///////////13")
        return x
      }
    },
    provide: function provide() {
      var _this = this;

      return {
        slots: function slots() {
          return _this.$slots;
        }
      };
    },
    model: {
      prop: "data"
    },
    setup: function setup() {
      var tablewrapper = (0, _vue.ref)(null);
      return {
        tablewrapper: tablewrapper
      };
    },
    render: function render() {
      return () => {}
      // return (0, _vue.h)(RLClientTable, {
      //   data: this.data,
      //   columns: this.columns,
      //   name: this.name,
      //   options: this.options,
      //   ref: 'table'
      // }, {
      //   "default": function _default(props) {
      //     console.log("--------------------rendering-------------------")
      //     return props.override ? (0, _vue.h)(props.override, {
      //       props: (0, _omit["default"])(props, 'override')
      //     }) : (0, _vue.createVNode)("div", {
      //       "class": "VueTables VueTables--" + props.source
      //     }, [(0, _vue.createVNode)("div", {
      //       "class": props.theme.row
      //     }, [(0, _vue.createVNode)("div", {
      //       "class": props.theme.column
      //     }, [!props.opts.filterByColumn && props.opts.filterable ? (0, _vue.createVNode)("div", {
      //       "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.left, " VueTables__search")
      //     }, [props.slots.beforeFilter ? props.slots.beforeFilter() : '', (0, _vue.h)(_VtGenericFilter["default"]), props.slots.afterFilter ? props.slots.afterFilter : '']) : '', props.slots.afterFilterWrapper ? props.slots.afterFilterWrapper() : '', (props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual ? (0, _vue.createVNode)("div", {
      //       "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__limit")
      //     }, [props.slots.beforeLimit ? props.slots.beforeLimit() : '', (0, _vue.h)(_VtPerPageSelector["default"]), props.slots.afterLimit ? props.slots.afterLimit : '']) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? (0, _vue.createVNode)("div", {
      //       "class": "VueTables__pagination-wrapper"
      //     }, [(0, _vue.createVNode)("div", {
      //       "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__dropdown-pagination")
      //     }, [(0, _vue.h)(_VtDropdownPagination["default"])])]) : '', props.opts.columnsDropdown ? (0, _vue.createVNode)("div", {
      //       "class": "VueTables__columns-dropdown-wrapper ".concat(props.theme.right, " ").concat(props.theme.dropdown.container)
      //     }, [(0, _vue.h)(_VtColumnsDropdown["default"])]) : ''])]), props.slots.beforeTable ? props.slots.beforeTable() : '', (0, _vue.createVNode)("div", {
      //       "class": "table-responsive VueTables__wrapper",
      //       "ref": "tablewrapper"
      //     }, [(0, _vue.h)(_VtTable["default"]), props.opts.pagination.virtual ? (0, _vue.h)(_Observer["default"], {
      //       onIntersect: function onIntersect() {
      //         props.setPage(props.page + 1);
      //       }
      //     }) : '']), props.slots.afterTable ? props.slots.afterTable() : '', props.opts.pagination.virtual || !props.opts.pagination.show ? '' : (0, _vue.h)(_VtPagination["default"]), props.opts.pagination.virtual || props.opts.pagination.dropdown ? (0, _vue.h)(_VtPaginationCount["default"]) : '']);
      //   }
      // });
    }
  };
}