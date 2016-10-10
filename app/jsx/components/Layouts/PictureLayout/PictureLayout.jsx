/**
 * This layout consists of one CategoryLabel and one PageContainer
 * PageContainer will display three promoted items.
 *
 * ------------------------------------------------------
 *                         [Label]
 *   [Pic item]   [Pic item]   [Pic item]   [Pic item]
 * ------------------------------------------------------
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PictureContainer from '../../Containers/PictureContainer/PictureContainer'
import CategoryLabel from '../../Labels/CategoryLabel/CategoryLabel'
import styles from './PictureLayout.css'

export default class PictureLayout extends React.Component {
  render() {
    return (
      <div className="picture-layout">
        <CategoryLabel label={this.props.label}/>
        <PictureContainer />
        <PictureContainer />
      </div>
    )
  }
}
