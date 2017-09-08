import React, {Component} from 'react';

export default class Rectangle extends Component {

    constructor(props) {
        super();
        this.state = {
            backgroundColor: 'lightgrey',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.keyPassed === this.props.rectKey) {
            this.setState({
                backgroundColor: 'aqua',
            });
        }
        else {
            this.setState({
                backgroundColor: 'lightgrey',
            });
        }
    }

    handleClick() {
        this.setState({
            backgroundColor: 'aqua',
        });
        this.props.updateColor(this.props.rectKey);
        this.props.updateText(this.props.textValue);
    }
    

    render() {
        let rectStyle = {

            backgroundColor: this.state.backgroundColor,
            height: 60,
            width: '10%',
            margin: 'auto',
        }

        let textStyle = {
            textAlign: 'center'
        }

        return (
            <div 
                style={rectStyle}
                //className='hvr-fade'

                onClick={this.handleClick} 
                
                /*
                onMouse={() => {
                    console.log(this.props.textValue); 
                    } 
                }
                */
                
            >

                <h2 style={textStyle}>
                    {this.props.textValue}
                </h2>
            </div>
        );
    }
}