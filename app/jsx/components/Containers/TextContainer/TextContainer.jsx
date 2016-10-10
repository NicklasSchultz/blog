import React, {Component} from 'react';
import styles from './TextContainer.css'
import ContentSection from '../ContentSections/ContentSections'


export default class TextContainer extends Component {
  render() {
    let dummy = {
        config: [1,2,3,1],
        images: [
            "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
            "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
            "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
            "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
            ],
        text: "This is a very long text about stuff. This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.Thi This is a very long text about stuff. This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.  s is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff.This is a very long text about stuff."
    };
    return (
      <div className='text-wrapper'>
        <ContentSection align="left" src={dummy.images[1]} text={dummy.text}/>
        <ContentSection align="center" src={dummy.images[0]} text={dummy.text}/>
        <ContentSection align="right" src={dummy.images[2]} text={dummy.text}/>
      </div>
    )
  }
}
