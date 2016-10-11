import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../components/Containers/ImageContainer/ImageContainer'
import TextLayout from '../Layouts/TextLayout/TextLayout'

export default class Blog extends React.Component {
  render() {
  let txt = "This is a very long text about stuff. This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.Thi This is a very long text about stuff. This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.  s is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff."

  let dummy = [{
        alignment: "left",
        text: txt,
        image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
    },{
        alignment: "center",
        text: txt,
        image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
    },{
        alignment:"right",
        text: txt,
        image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
  }];
    return (
      <div className="main-content-area">
        <ImageContainer src="http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"/>
        <TextLayout dummy={dummy}/>
      </div>
    )
  }
}
