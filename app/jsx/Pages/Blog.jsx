import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../components/Containers/ImageContainer/ImageContainer'
import TextLayout from '../Layouts/TextLayout/TextLayout'

export default class Blog extends React.Component {
  render() {
  let dummy = {
      config: ["left", "center", "right"],
      images: [
          "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
          "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
          "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
          "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
          ],
      text: "This is a very long text about stuff. This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.Thi This is a very long text about stuff. This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.  s is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff."
  };
    return (
      <div className="main-content-area">
        <ImageContainer src="http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"/>
        <TextLayout dummy={dummy}/>
      </div>
    )
  }
}
