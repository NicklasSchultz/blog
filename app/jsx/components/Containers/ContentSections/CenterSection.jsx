import React, {Component} from 'react'

export default class CenterSection extends Component {
  render() {
    return (
      <div>
        {this.props.text}
        <img className={this.props.classname} src={this.props.src} />
      </div>
    )
  }
}
