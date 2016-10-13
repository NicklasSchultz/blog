import React from 'react';
import Row from '../Row';
import Column from '../Column';

import styles from './ResponsiveGrid.css';

export default class ResponsiveGrid extends React.Component {
  render() {
    let content = []
    this.props.data.forEach(function(row) {
        let columns = []
        row.cols.forEach(function(column) {
            columns.push(<Column col={column.columnSpan} src={column.image} />)
        })
        content.push(
            <Row>
                {columns}
            </Row>
        )
    });
    return (
      <div className="responsive-grid">
        {content}
      </div>
    );
  }
}
