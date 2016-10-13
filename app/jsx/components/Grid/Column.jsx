import React from 'react'
import styles from './Column.css'

export default class Column extends React.Component {
    render() {
        let classname = "grid-column-" + this.props.col;
        return (
            <div className={classname}>
                <img className="grid-image" src={this.props.src} />
            </div>
        )
    }
}
