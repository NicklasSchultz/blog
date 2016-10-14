import React, {Component} from 'react';
import styles from './PageContainer.css'

import PromoContainer from '../PromoContainer/PromoContainer'

export default class PageContainer extends React.Component {
    render() {
        let content = [];

        Object.keys(this.props.data).map(function (key) {
            let item = this.props.data[key]
            content.push(<PromoContainer thumbnail={item.thumbnail} title={item.title} content={item.desc} key={item.title}/>)
        }.bind(this));
        return (
            <div className='page-wrapper'>
                {content}
            </div>
        )
    }
}
