import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import ResponsiveGrid from '../components/Grid/ResponsiveGrid/ResponsiveGrid';

class Photos extends React.Component {
    render() {
        let gridConfig = [
          {
            cols: [
                {
                    columnSpan: 8,
                    image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
                },{
                    columnSpan: 4,
                    image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"
                }
            ]
        }, {
          cols: [
              {
                  columnSpan: 4,
                  image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
              },{
                  columnSpan: 4,
                  image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"
              },{
                  columnSpan: 4,
                  image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg"
              }
          ]
      }, {
        cols: [
            {
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
            },{
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"
            },{
                columnSpan: 2,
                image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg"
            },{
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
            },{
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"
            },{
                columnSpan: 2,
                image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg"
            }
        ]
    },{
      cols: [
          {
              columnSpan: 3,
              image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
          },{
              columnSpan: 6,
              image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"
          },{
              columnSpan: 3,
              image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg"
          }
      ]
    },{
      cols: [
          {
              columnSpan: 5,
              image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048"
          },{
              columnSpan: 4,
              image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"
          },{
              columnSpan: 3,
              image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg"
          }
      ]
    }
    ]
        return (
          <div>
            <ResponsiveGrid data={gridConfig}/>
          </div>
        )
    }
}

module.exports = Photos;
