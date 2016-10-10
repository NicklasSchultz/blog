import React, {Component} from 'react';
import styles from './PromoContainer.css'

export default class PromoContainer extends Component {
  render() {
    return (
      <div className='promo-wrapper'>
        <img className='img-icon' src={this.props.src} />
        <div className="blog-header">{this.props.title}</div>
        <div className="blog-content">{this.props.content}</div>
      </div>
    )
  }
}
