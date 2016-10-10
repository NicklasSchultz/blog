/**
 * This layout consists of one CategoryLabel and one PageContainer
 * PageContainer will display three promoted items.
 *
 * ------------------------------------------------------
 *                         [Label]
 *   [Promoted item]   [Promoted item]   [Promoted item]
 * ------------------------------------------------------
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from '../../Containers/PageContainer/PageContainer'
import CategoryLabel from '../../Labels/CategoryLabel/CategoryLabel'
import styles from './PromoLayout.css'

export default class PromotionLayout extends React.Component {
  render() {
    return (
      <div className="promotion-layout">
        <CategoryLabel label={this.props.label}/>
        <PageContainer />
      </div>
    )
  }
}
