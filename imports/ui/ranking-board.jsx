import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

export default class MyTable extends React.Component {
  combineSameInstitute() {
    let data = this.props.tabledata;
    
  }
  render() {
    let myTableData = this.props.tabledata;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Table
          rowsCount={myTableData.length}
          rowHeight={50}
          headerHeight={50}
          width={700}
          height={500}>
          <Column
            header={<Cell>行业</Cell>}
            cell={
              <MyTextCell
                data={myTableData}
                field="行业"
                />
            }
            width={200}
            />
          <Column
            header={<Cell>名次</Cell>}
            cell={
              <MyTextCell
                data={myTableData}
                field="名次"
                />
            }
            width={100}
            />
          <Column
            header={<Cell>姓名</Cell>}
            cell={
              <MyTextCell
                data={myTableData}
                field="姓名"
                />
            }
            width={200}
            />
          <Column
            header={<Cell>机构</Cell>}
            cell={
              <MyTextCell
                data={myTableData}
                field="机构"
                />
            }
            width={200}
            />
        </Table>
      </div>
    );
  }
}
