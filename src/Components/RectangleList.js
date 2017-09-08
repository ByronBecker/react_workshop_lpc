
import React, {Component} from 'react';

import Rectangle from './Rectangle';


export default class RectangleList extends Component {

    constructor(props) {
        super();
        this.state = {
            keyPassed: 0
        }
        this.updateRectangleColors = this.updateRectangleColors.bind(this);
    }

    updateRectangleColors(key) {
        this.setState({
            keyPassed: key,
        });
    }
    
    render() {
        let listStyle = {
            width: '100%',
            borderColor: 'black',
            borderStyle: 'solid',
            //backgroundColor: '',
            padding: '1%',
            display: 'flex',
        }
        return (
            <div style={listStyle}>
                <Rectangle 
                    textValue='Home'
                    updateText={this.props.updateText}
                    updateColor={this.updateRectangleColors}
                    rectKey={1}
                    keyPassed={this.state.keyPassed}
                />
                <Rectangle
                    textValue='About'
                    updateText={this.props.updateText}
                    updateColor={this.updateRectangleColors}
                    rectKey={2}
                    keyPassed={this.state.keyPassed}
                />
                <Rectangle
                    textValue='Projects'
                    updateText={this.props.updateText}
                    updateColor={this.updateRectangleColors}
                    rectKey={3}
                    keyPassed={this.state.keyPassed}
                />
                <Rectangle
                    textValue='Contact'
                    updateText={this.props.updateText}
                    updateColor={this.updateRectangleColors}
                    rectKey={4}
                    keyPassed={this.state.keyPassed}
                />
                <Rectangle
                    textValue='Other'
                    updateText={this.props.updateText}
                    updateColor={this.updateRectangleColors}
                    rectKey={5}
                    keyPassed={this.state.keyPassed}
                />
                {//console.log(this.state.rectangleList)}
                }
            </div>
        );
    }
}