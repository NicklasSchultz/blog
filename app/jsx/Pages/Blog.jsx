import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../components/Containers/ImageContainer/ImageContainer'
import TextLayout from '../Layouts/TextLayout/TextLayout'
import {getBlogs, getTexts} from '../services/ajax'

export default class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            texts: []
        };
    }
    loadBlogEntries() {
        getBlogs().then(
            function(data) {
                this.setState({data: data});
            }.bind(this),
            function(reason) {
                console.error(reason);
            }.bind(this)
        );
    }
    loadTextEntry() {
        getTexts().then(
            function(data) {
                this.setState({texts: data});
            }.bind(this),
            function(reason) {
                console.error(reason);
            }.bind(this)
        );
    }
    componentDidMount() {
        this.loadBlogEntries();
        this.loadTextEntry();
    }
    render() {
        return (
            <div className="main-content-area">
                <ImageContainer src="http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"/>
                <TextLayout texts={this.state.texts} data={this.state.data} />
            </div>
        )
    }
}
