import React, {Component} from 'react'

export default class RightSection extends Component {
  render() {
    return (
      <div>
        <img className={this.props.classname} src={this.props.src} />
        {this.props.text}
      </div>
    )
  }
}
