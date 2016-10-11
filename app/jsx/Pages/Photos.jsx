import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import ResponsiveGrid from '../components/Grid/ResponsiveGrid/ResponsiveGrid';

class Photos extends React.Component {
  render() {
    return (
      <div>
        <h2>Photos </h2>
        <ResponsiveGrid />
      </div>
    )
  }
}

module.exports = Photos;
