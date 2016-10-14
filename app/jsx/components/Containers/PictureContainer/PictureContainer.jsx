import React, {Component} from 'react';
import styles from './PictureContainer.css'

import ImageButton from '../../Buttons/ImageButton/ImageButton'

export default class PictureContainer extends Component {
  render() {
      let content = [];
      Object.keys(this.props.data).map(function (key) {
          let item = this.props.data[key]
          let boundClick = this.props.callback.bind(this, item);
          content.push(<ImageButton src={item.thumbnail} text={item.title} subtext={item.desc} key={item.id} callback={boundClick}/>);
      }.bind(this));
    return (
      <div className='picture-wrapper'>
          {content}
      </div>
    )
  }
}
