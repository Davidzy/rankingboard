import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Records } from '../api/records';
import MyTable from './ranking-board';

class App extends React.Component {
  render() {
    return (
      <MyTable tabledata={this.props.records} title={"2015新财富最佳分析师"} />
    )
  }
}

export default createContainer( () => {
  Meteor.subscribe('records');
  return {
    records: Records.find({}, {sort: {行业: 1, 名次: 1, 机构: 1}}).fetch()
  };
}, App);
