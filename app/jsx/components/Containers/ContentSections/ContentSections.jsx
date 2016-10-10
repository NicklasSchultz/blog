import React, {Component} from 'react';
import styles from './ContentSection.css'
import LeftSection from './LeftSection'
import CenterSection from './CenterSection'
import RightSection from './RightSection'


export default class ContentSection extends Component {
  render() {
    let classname;
    if(this.props.align === "left") {
        return (
          <div className='section-wrapper left'>
              <LeftSection classname="left-align" src={this.props.src} text={this.props.text} />
          </div>
        )
    } else if (this.props.align === "center") {
        return (
          <div className='section-wrapper center'>
              <CenterSection classname="center-align" src={this.props.src} text={this.props.text} />
          </div>
        )
    } else {
        return (
          <div className='section-wrapper right'>
              <RightSection classname="right-align" src={this.props.src} text={this.props.text} />
          </div>
        )
    }

  }
}
