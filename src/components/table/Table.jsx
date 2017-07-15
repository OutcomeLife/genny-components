import React, { Component } from 'react';
import ReactTable from 'react-table';
import demoData from './demoData';
import './table.css'

class Table extends Component {
constructor(){
    super();
    this.state =
        {
            // General 
            data: demoData,
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
            getTdProps:undefined
        }
}
componentDidMount() {
    const {
        data, loading, showPagination, showPaginationTop, showPaginationBottom, showPageSizeOptions,
        pageSizeOptions, defaultPageSize, minRows, showPageJump, collapseOnSortingChange, collapseOnPageChange,
        collapseOnDataChange, freezeWhenExpanded, sortable, resizable, filterable, defaultSortDesc, defaultSorted,
        defaultFiltered, defaultResized, defaultExpanded, getTdProps } = this.state;

    this.setState({
        data: (this.props.data === undefined) ? demoData : this.props.data,
        loading: (this.props.loading === undefined) ? loading : this.props.loading,
        showPagination: (this.props.showPagination === undefined) ? showPagination : this.props.showPagination,
        showPaginationTop: (this.props.showPaginationTop === undefined) ? showPaginationTop : this.props.showPaginationTop,
        showPaginationBottom: (this.props.showPaginationBottom === undefined) ? showPaginationBottom : this.props.showPaginationBottom,
        showPageSizeOptions: (this.props.showPageSizeOptions === undefined) ? showPageSizeOptions : this.props.showPageSizeOptions,
        pageSizeOptions: (this.props.pageSizeOptions === undefined) ? pageSizeOptions : this.props.pageSizeOptions,
        defaultPageSize: (this.props.defaultPageSize === undefined) ? defaultPageSize : this.props.defaultPageSize,
        minRows: (this.props.minRows === undefined) ? minRows : this.props.minRows,
        showPageJump: (this.props.showPageJump === undefined) ? showPageJump : this.props.showPageJump,
        collapseOnSortingChange: (this.props.collapseOnSortingChange === undefined) ? collapseOnSortingChange : this.props.collapseOnSortingChange,
        collapseOnPageChange: (this.props.collapseOnPageChange === undefined) ? collapseOnPageChange : this.props.collapseOnPageChange,
        collapseOnDataChange: (this.props.collapseOnDataChange === undefined) ? collapseOnDataChange : this.props.collapseOnDataChange,
        freezeWhenExpanded: (this.props.freezeWhenExpanded === undefined) ? freezeWhenExpanded : this.props.freezeWhenExpanded,
        sortable: (this.props.sortable === undefined) ? sortable : this.props.sortable,
        resizable: (this.props.resizable === undefined) ? resizable : this.props.resizable,
        filterable: (this.props.filterable === undefined) ? filterable : this.props.filterable,
        defaultSortDesc: (this.props.defaultSortDesc === undefined) ? defaultSortDesc : this.props.defaultSortDesc,
        defaultSorted: (this.props.defaultSorted === undefined) ? defaultSorted : this.props.defaultSorted,
        defaultFiltered: (this.props.defaultFiltered === undefined) ? defaultFiltered : this.props.defaultFiltered,
        defaultResized: (this.props.defaultResized === undefined) ? defaultResized : this.props.defaultResized,
        defaultExpanded: (this.props.defaultExpanded === undefined) ? defaultExpanded : this.props.defaultExpanded,
        getTdProps: (this.props.getTdProps === undefined) ? getTdProps : this.props.getTdProps,
        
    })
}
    render() {
        const { 
        data, loading, showPagination, showPaginationTop, showPaginationBottom, showPageSizeOptions,
        pageSizeOptions, defaultPageSize, minRows, showPageJump, collapseOnSortingChange, collapseOnPageChange, 
        collapseOnDataChange,freezeWhenExpanded, sortable, resizable, filterable, defaultSortDesc, defaultSorted, 
        defaultFiltered,defaultResized, defaultExpanded, getTdProps } = this.state;

        //for dynamic display data
        const columns = () => {
            var col = [];
            for (var i = 0; i < 1; i++) {
                for (var key in data[i]) {
                    if (data[i].hasOwnProperty(key)) {
                        let Header = key.toUpperCase();
                        let accessor = key;
                        let column = { Header, accessor };
                        col.push(column);
                    }
                }
            }
            return col;
        }
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns()}
                    loading= {loading}
                    showPagination= {showPagination}
                    showPaginationTop= {showPaginationTop}
                    showPaginationBottom= {showPaginationBottom}
                    showPageSizeOptions= {showPageSizeOptions}
                    pageSizeOptions= {pageSizeOptions}
                    defaultPageSize= {defaultPageSize}
                    minRows= {minRows}
                    showPageJump= {showPageJump}
                    collapseOnSortingChange= {collapseOnSortingChange}
                    collapseOnPageChange= {collapseOnPageChange}
                    collapseOnDataChange= {collapseOnDataChange}
                    freezeWhenExpanded= {freezeWhenExpanded}
                    sortable= {sortable}
                    resizable= {resizable}
                    filterable= {filterable}
                    defaultSortDesc= {defaultSortDesc}
                    defaultSorted= {defaultSorted}
                    defaultFiltered= {defaultFiltered}
                    defaultResized= {defaultResized}
                    defaultExpanded= {defaultExpanded}
                    getTdProps={getTdProps}

                />
            </div>
        );
    }
}

export default Table;