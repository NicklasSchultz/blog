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
                    image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
                    id: 12
                },{
                    columnSpan: 4,
                    image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
                    id: 13
                }
            ]
        }, {
          cols: [
              {
                  columnSpan: 4,
                  image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
                  id: 14
              },{
                  columnSpan: 4,
                  image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
                  id: 15
              },{
                  columnSpan: 4,
                  image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
                  id: 16
              }
          ]
      }, {
        cols: [
            {
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
                id: 17
            },{
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
                id: 18
            },{
                columnSpan: 2,
                image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
                id: 19
            },{
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
                id: 20
            },{
                columnSpan: 2,
                image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
                id: 21
            },{
                columnSpan: 2,
                image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
                id: 22
            }
        ]
    },{
      cols: [
          {
              columnSpan: 3,
              image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
              id: 23
          },{
              columnSpan: 6,
              image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
              id:24
          },{
              columnSpan: 3,
              image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
              id: 25
          }
      ]
    },{
      cols: [
          {
              columnSpan: 5,
              image: "http://media.istockphoto.com/photos/sunset-on-a-lake-picture-id118907537?s=2048x2048",
              id: 26
          },{
              columnSpan: 4,
              image: "http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816",
              id: 27
          },{
              columnSpan: 3,
              image: "http://images.freeimages.com/images/previews/c50/snow-on-tree-1534379.jpg",
              id: 28
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
