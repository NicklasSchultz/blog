import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

class NavBar extends React.Component {
  handleClick(event) {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  };
  render() {
    let sections = ["Home", "Blog","Destinations", "About", "Photos"];
    return (
      <div>
          <NavbarRow sections={sections} handleClick={this.handleClick}/>
          <ContentContainer children={this.props.children}/>
      </div>
    )
  }
}

var ContentContainer = React.createClass({
    render() {
        return(
            <div className="content">
                {this.props.children}
            </div>
        )
    }
});

var Section = React.createClass({
  render() {
    return (
      <li className="navbar-section">
        <Link to={"/" + this.props.name}>{this.props.name}</Link>
      </li>
    )
  }
});

var SectionsIcon = React.createClass({
    render() {
        return (
          <li className="icon">
            <a href="javascript:void(0);" onClick={this.props.onClickFunction}>&#9776;</a>
          </li>
        )
    }
});

var NavbarRow = React.createClass({
  render() {
    var sections = [];
    this.props.sections.forEach(function(section){
      sections.push(<Section name={section} key={section}/>);
    });
    sections.push(<SectionsIcon onClickFunction={this.props.handleClick} key="icon"/>)
    return (
      <ul className="topnav" id="myTopnav">
        {sections}
      </ul>
    )
  }
});

module.exports = NavBar;
