import React, {Component} from 'react';
import styles from './PageContainer.css'

import PromoContainer from '../PromoContainer/PromoContainer'

export default class PageContainer extends Component {
  render() {
  let dummy = [{
      src: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
      title: "Bussride to Montenegro",
      content: "Our buss went from the city centre of dubrovnik in the morning. There was a asdgasdg adsf sda fasdfs afadsfsf s"
  },{
      src: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
      title: "Boat trip ",
      content: "Our buss went from the city centre of dubrovnik in the morning. There was a asdgasdg adsf sda fasdfs afadsfsf s"
  },{
      src: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
      title: "Old Town",
      content: "Our buss went from the city centre of dubrovnik in the morning. There was a asdgasdg adsf sda fasdfs afadsfsf s"
  }]
    return (
      <div className='page-wrapper'>
        <PromoContainer src={dummy[0].src} title={dummy[0].title} content={dummy[0].content}/>
        <PromoContainer src={dummy[1].src} title={dummy[1].title} content={dummy[1].content}/>
        <PromoContainer src={dummy[2].src} title={dummy[2].title} content={dummy[2].content}/>
      </div>
    )
  }
}
