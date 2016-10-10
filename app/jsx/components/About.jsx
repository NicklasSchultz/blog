import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Buttons/Button/Button'

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About </h2>
        <Button />
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    )
  }
}
//ReactDOM.render(<About />, document.getElementById('content'));
module.exports = About;
