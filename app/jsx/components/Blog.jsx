import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './Containers/ImageContainer/ImageContainer'
import TextLayout from './Layouts/TextLayout/TextLayout'

export default class Blog extends React.Component {
  render() {
    return (
      <div className="main-content-area">
        <ImageContainer src="http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"/>
        <TextLayout />
      </div>
    )
  }
}
