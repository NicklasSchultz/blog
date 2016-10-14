import React, {Component} from 'react';
import styles from './ImageButton.css'

export default class ImageButton extends Component {
  render() {
    return (
      <div className="image-btn-wrapper" onClick={this.props.callback}>
        <img className="image-btn-image" src={this.props.src}/>
        <div className="image-btn-text"><span>{this.props.text}<span className='spacer'></span><br /><span className='spacer'></span>{this.props.subtext}</span></div>
      </div>
    )
  }
}
