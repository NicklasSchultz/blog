import React, {Component} from 'react';
import styles from './TextContainer.css'
import ContentSection from '../ContentSections/ContentSections'

export default class TextContainer extends Component {
  render() {
    let contentSections = [];
    if(Object.keys(this.props.data).length > 1) {
        Object.keys(this.props.data).map(function(key){
            let item = this.props.data[key];
            let text = "";
            if(this.props.texts && item && this.props.texts[item.text]) {
                text = this.props.texts[item.text].text;
            }
            contentSections.push(<ContentSection align={item.alignment} src={item.thumbnail} text={text} key={item.id}/>)
        }.bind(this));
    } else if(Object.keys(this.props.data).length === 1){
        contentSections.push(<ContentSection align={this.props.data[1].alignment} src={this.props.data[1].thumbnail} text={this.props.texts} key="2"/>)
    }
    return (
      <div className='text-wrapper'>
        {contentSections}
      </div>
    )
  }
}
