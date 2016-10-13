import React from 'react';
import TextLayout from '../Layouts/TextLayout/TextLayout'
import {getTextById, getAbout} from '../services/ajax'

export default class About extends React.Component {
    constructor(props) {
          super(props)
          this.state = {
              data: [],
              texts: []
          };
      }
      loadAbout() {
          getAbout().then(
              function(data) {
                  this.loadTextEntry(data[1].text)
                  this.setState({data: data});
              }.bind(this),
              function(reason) {
                  console.error(reason);
              }.bind(this)
          );
      }
      loadTextEntry(id) {
          getTextById(id).then(
              function(data) {
                  this.setState({texts: data.text});
              }.bind(this),
              function(reason) {
                  console.error(reason);
              }.bind(this)
          );
      }
      componentDidMount() {
          this.loadAbout();
      }
      render() {
          return (
              <div>
                  <TextLayout data={this.state.data} texts={this.state.texts}/>
              </div>
          )
      }
}
