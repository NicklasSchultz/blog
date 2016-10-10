import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../components/Containers/ImageContainer/ImageContainer'
import PromoLayout from '../Layouts/PromoLayout/PromoLayout'
import PictureLayout from '../Layouts/PictureLayout/PictureLayout'

export default class Home extends React.Component {
  render() {
    return (
      <div className="main-content-area">
        <ImageContainer src="http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"/>
        <PromoLayout label="Latest Blog Posts"/>
        <PictureLayout label="Our favorite destinations"/>
      </div>
    )
  }
}
