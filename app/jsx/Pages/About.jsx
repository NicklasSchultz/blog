import React from 'react';
import TextLayout from '../Layouts/TextLayout/TextLayout'

export default class About extends React.Component {
  render() {
    let dummy = [{
          alignment: "left",
          text: "Hej, vi är 2 resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning  resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning  resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning  resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåk 2 resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning  resglada människor. Vi 2 resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning  resglada människor. Vining resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning resglada människor. Vi gillar värme och kyla. Sol bad, vinter, snö skidåkning ",
          image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
    }];
    return (
      <div>
          <TextLayout dummy={dummy}/>
      </div>
    )
  }
}
