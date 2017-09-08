import React, {Component} from 'react';

export default class TextDisplay extends Component {
    constructor(props) {
        super(props);
        this.state={
            otherText: this.props.otherText,
        }
        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            otherText: nextProps.otherText,
        });
    }

    render() {
        let textObject = {
        Home: 
            <div>
                <p>
                    My home page
                </p>
            </div>,
        About:
            <div>
                <p>
                    All about me
                </p>
            </div>,
        Projects:
            <div>
                <p>
                    My projects
                </p>
            </div>,
        Contact:
            <div>
                <p>
                    Contact me at 1-800-Con-tact
                </p>
            </div>,
        Other:
            <div>
                <p>
                    {this.state.otherText}
                </p>
            </div>,
    }
        return(
            <div>
                {textObject[this.props.text]}
            </div>
        );
    }
}


