'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTable = require('react-table');

var _reactTable2 = _interopRequireDefault(_reactTable);

var _demoData = require('./demoData');

var _demoData2 = _interopRequireDefault(_demoData);

require('./table.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

        _this.state = {
            // General 
            data: _demoData2.default,
            loading: false,
            showPagination: true,
            showPaginationTop: false,
            showPaginationBottom: true,
            showPageSizeOptions: true,
            pageSizeOptions: [5, 10, 20, 25, 50, 100],
            defaultPageSize: 20,
            minRows: undefined,
            showPageJump: true,
            collapseOnSortingChange: true,
            collapseOnPageChange: true,
            collapseOnDataChange: true,
            freezeWhenExpanded: false,
            sortable: true,
            resizable: true,
            filterable: false,
            defaultSortDesc: false,
            defaultSorted: [],
            defaultFiltered: [],
            defaultResized: [],
            defaultExpanded: {},
            getTdProps: undefined
        };
        return _this;
    }

    _createClass(Table, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _state = this.state,
                data = _state.data,
                loading = _state.loading,
                showPagination = _state.showPagination,
                showPaginationTop = _state.showPaginationTop,
                showPaginationBottom = _state.showPaginationBottom,
                showPageSizeOptions = _state.showPageSizeOptions,
                pageSizeOptions = _state.pageSizeOptions,
                defaultPageSize = _state.defaultPageSize,
                minRows = _state.minRows,
                showPageJump = _state.showPageJump,
                collapseOnSortingChange = _state.collapseOnSortingChange,
                collapseOnPageChange = _state.collapseOnPageChange,
                collapseOnDataChange = _state.collapseOnDataChange,
                freezeWhenExpanded = _state.freezeWhenExpanded,
                sortable = _state.sortable,
                resizable = _state.resizable,
                filterable = _state.filterable,
                defaultSortDesc = _state.defaultSortDesc,
                defaultSorted = _state.defaultSorted,
                defaultFiltered = _state.defaultFiltered,
                defaultResized = _state.defaultResized,
                defaultExpanded = _state.defaultExpanded,
                getTdProps = _state.getTdProps;


            this.setState({
                data: this.props.data === undefined ? _demoData2.default : this.props.data,
                loading: this.props.loading === undefined ? loading : this.props.loading,
                showPagination: this.props.showPagination === undefined ? showPagination : this.props.showPagination,
                showPaginationTop: this.props.showPaginationTop === undefined ? showPaginationTop : this.props.showPaginationTop,
                showPaginationBottom: this.props.showPaginationBottom === undefined ? showPaginationBottom : this.props.showPaginationBottom,
                showPageSizeOptions: this.props.showPageSizeOptions === undefined ? showPageSizeOptions : this.props.showPageSizeOptions,
                pageSizeOptions: this.props.pageSizeOptions === undefined ? pageSizeOptions : this.props.pageSizeOptions,
                defaultPageSize: this.props.defaultPageSize === undefined ? defaultPageSize : this.props.defaultPageSize,
                minRows: this.props.minRows === undefined ? minRows : this.props.minRows,
                showPageJump: this.props.showPageJump === undefined ? showPageJump : this.props.showPageJump,
                collapseOnSortingChange: this.props.collapseOnSortingChange === undefined ? collapseOnSortingChange : this.props.collapseOnSortingChange,
                collapseOnPageChange: this.props.collapseOnPageChange === undefined ? collapseOnPageChange : this.props.collapseOnPageChange,
                collapseOnDataChange: this.props.collapseOnDataChange === undefined ? collapseOnDataChange : this.props.collapseOnDataChange,
                freezeWhenExpanded: this.props.freezeWhenExpanded === undefined ? freezeWhenExpanded : this.props.freezeWhenExpanded,
                sortable: this.props.sortable === undefined ? sortable : this.props.sortable,
                resizable: this.props.resizable === undefined ? resizable : this.props.resizable,
                filterable: this.props.filterable === undefined ? filterable : this.props.filterable,
                defaultSortDesc: this.props.defaultSortDesc === undefined ? defaultSortDesc : this.props.defaultSortDesc,
                defaultSorted: this.props.defaultSorted === undefined ? defaultSorted : this.props.defaultSorted,
                defaultFiltered: this.props.defaultFiltered === undefined ? defaultFiltered : this.props.defaultFiltered,
                defaultResized: this.props.defaultResized === undefined ? defaultResized : this.props.defaultResized,
                defaultExpanded: this.props.defaultExpanded === undefined ? defaultExpanded : this.props.defaultExpanded,
                getTdProps: this.props.getTdProps === undefined ? getTdProps : this.props.getTdProps

            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                data = _state2.data,
                loading = _state2.loading,
                showPagination = _state2.showPagination,
                showPaginationTop = _state2.showPaginationTop,
                showPaginationBottom = _state2.showPaginationBottom,
                showPageSizeOptions = _state2.showPageSizeOptions,
                pageSizeOptions = _state2.pageSizeOptions,
                defaultPageSize = _state2.defaultPageSize,
                minRows = _state2.minRows,
                showPageJump = _state2.showPageJump,
                collapseOnSortingChange = _state2.collapseOnSortingChange,
                collapseOnPageChange = _state2.collapseOnPageChange,
                collapseOnDataChange = _state2.collapseOnDataChange,
                freezeWhenExpanded = _state2.freezeWhenExpanded,
                sortable = _state2.sortable,
                resizable = _state2.resizable,
                filterable = _state2.filterable,
                defaultSortDesc = _state2.defaultSortDesc,
                defaultSorted = _state2.defaultSorted,
                defaultFiltered = _state2.defaultFiltered,
                defaultResized = _state2.defaultResized,
                defaultExpanded = _state2.defaultExpanded,
                getTdProps = _state2.getTdProps;

            //for dynamic display data

            var columns = function columns() {
                var col = [];
                for (var i = 0; i < 1; i++) {
                    for (var key in data[i]) {
                        if (data[i].hasOwnProperty(key)) {
                            var Header = key.toUpperCase();
                            var accessor = key;
                            var column = { Header: Header, accessor: accessor };
                            col.push(column);
                        }
                    }
                }
                return col;
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactTable2.default, {
                    data: data,
                    columns: columns(),
                    loading: loading,
                    showPagination: showPagination,
                    showPaginationTop: showPaginationTop,
                    showPaginationBottom: showPaginationBottom,
                    showPageSizeOptions: showPageSizeOptions,
                    pageSizeOptions: pageSizeOptions,
                    defaultPageSize: defaultPageSize,
                    minRows: minRows,
                    showPageJump: showPageJump,
                    collapseOnSortingChange: collapseOnSortingChange,
                    collapseOnPageChange: collapseOnPageChange,
                    collapseOnDataChange: collapseOnDataChange,
                    freezeWhenExpanded: freezeWhenExpanded,
                    sortable: sortable,
                    resizable: resizable,
                    filterable: filterable,
                    defaultSortDesc: defaultSortDesc,
                    defaultSorted: defaultSorted,
                    defaultFiltered: defaultFiltered,
                    defaultResized: defaultResized,
                    defaultExpanded: defaultExpanded,
                    getTdProps: getTdProps

                })
            );
        }
    }]);

    return Table;
}(_react.Component);

exports.default = Table;