import React, { Component } from 'react';
import { Table } from '../../components';
import data from './demoData';

class ExampleTable extends Component {
    render() {
        const getTdProps = (state, rowInfo, column, instance) => {
            return {
                onClick: e => {
                    console.log('A Td Element was clicked!')
                    console.log('it produced this event:', e)
                    console.log('It was in this column:', column)
                    console.log('It was in this row:', rowInfo)
                    console.log('It was in this table instance:', instance)
                }
            }
        }
    
        return (
            <div>
                <Table getTdProps={getTdProps}/>
            </div>
        );
    }
}

export default ExampleTable;