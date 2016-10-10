import React, {Component} from 'react';
import styles from './Button.css'

export default class Button extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <button className={styles.button}>{this.props.text}</button>
      </div>
    )
  }
}
