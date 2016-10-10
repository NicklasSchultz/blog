import React, {Component} from 'react';
import styles from './PictureContainer.css'

import ImageButton from '../../Buttons/ImageButton/ImageButton'

export default class PictureContainer extends Component {
  render() {
  let dummy = [{
      src: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
      title: "Montenegro:",
      desc: "Bussride to Montenegro",
  },{
      src: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
      title: "Three Islands:",
      desc: "Full day boat trip"
  },{
      src: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
      title: "Dubrovnik Old Town:",
      desc: "Rainy GoT tour"
  },{
      src: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
      title: "Thunderstorm:",
      desc: "Wine on the balcony"
  }]
    return (
      <div className='picture-wrapper'>
        <ImageButton src={dummy[0].src} text={dummy[0].title} subtext={dummy[0].desc}/>
        <ImageButton src={dummy[1].src} text={dummy[1].title} subtext={dummy[1].desc}/>
        <ImageButton src={dummy[2].src} text={dummy[2].title} subtext={dummy[2].desc}/>
        <ImageButton src={dummy[3].src} text={dummy[3].title} subtext={dummy[3].desc}/>
      </div>
    )
  }
}
