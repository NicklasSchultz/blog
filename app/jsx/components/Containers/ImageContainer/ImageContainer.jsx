import React, {Component} from 'react';
import styles from './ImageContainer.css'

export default class ImageContainer extends Component {
  render() {
    return (
      <div className='img-wrapper'>
        <img className='img-container' src={this.props.src} />
      </div>
    )
  }
}
