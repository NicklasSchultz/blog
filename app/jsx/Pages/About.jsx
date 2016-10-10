import React from 'react';
import TextLayout from '../Layouts/TextLayout/TextLayout'

export default class About extends React.Component {
  render() {
    let dummy = {
        config: ["left"],
        text: "",
        images: ""
    }
    return (
      <div>
          <TextLayout />
      </div>
    )
  }
}
