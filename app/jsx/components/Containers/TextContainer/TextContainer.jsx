import React, {Component} from 'react';
import styles from './TextContainer.css'
import ContentSection from '../ContentSections/ContentSections'


export default class TextContainer extends Component {
  render() {
    let dummy = this.props.dummy;
    let contentSections = [];
    dummy.forEach(function(item) {
        contentSections.push(<ContentSection align={item.alignment} src={item.image} text={item.text}/>)
    });
    return (
      <div className='text-wrapper'>
        {contentSections}
      </div>
    )
  }
}
