import React, {Component} from 'react';
import styles from './TextContainer.css'
import ContentSection from '../ContentSections/ContentSections'


export default class TextContainer extends Component {
  render() {
    let dummy = this.props.dummy
    return (
      <div className='text-wrapper'>
        <ContentSection align={dummy.config[0]} src={dummy.images[1]} text={dummy.text}/>
        <ContentSection align={dummy.config[1]} src={dummy.images[0]} text={dummy.text}/>
        <ContentSection align={dummy.config[2]} src={dummy.images[2]} text={dummy.text}/>
      </div>
    )
  }
}
