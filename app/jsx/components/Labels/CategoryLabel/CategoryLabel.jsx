import React, {Component} from 'react';
import styles from './CategoryLabel.css'

export default class CategoryLabel extends Component {
    render() {
        return (
            <div className="category-label">{this.props.label}</div>
        )
    }
}
