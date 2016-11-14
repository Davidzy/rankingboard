import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Records } from '../api/records';
import Record from './record';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    renderRecords(records) {
        // console.log(records);
        let rows = records.map( record =>
            <Record key={record._id} record={record} />
        );
        // console.log(rows);
        return rows;
    }
    render() {
        // console.log(this.props.records);
        return (
            <div className="container">
                <h2>新财富2015分析师榜单</h2>
                <ul>
                    {this.renderRecords(this.props.records)}
                </ul>
            </div>
        )
    }
}


export default createContainer( () => {
  Meteor.subscribe('records');
  return {
    records: Records.find({}, {sort: {行业: 1, 名次: 1, 机构: 1}}).fetch()
  };
}, App);
