import React from 'react';
import ReactDOM from 'react-dom';
import TextContainer from '../../components/Containers/TextContainer/TextContainer'
import styles from './TextLayout.css'

export default class TextLayout extends React.Component {
  render() {

    return (
      <div className="text-layout">
          <TextContainer dummy={this.props.dummy}/>
      </div>
    )
  }
}