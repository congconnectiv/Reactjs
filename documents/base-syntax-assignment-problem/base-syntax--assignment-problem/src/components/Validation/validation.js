import React, {Component} from 'react';

class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validation: '',
            stringToArray: [],
            statusText: true
        }
    }
    getValueJustEnter = (e) => {
        this.setState({validation: e.target.value});

        const letterArray = this.state.validation.split('');
        this.setState({stringToArray: letterArray});
    }

    onDeleteChar = (characterIndex) => {
        this.state.statusText = true;
        const letterArray = this.state.stringToArray;
        letterArray.splice(characterIndex, 1);
        this.setState({stringToArray: letterArray});
        this.setState({validation: this.state.stringToArray.join('')});
    }

    render() {
        const styleInlineText = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }

        let content = this.state.stringToArray.map(((letter, index) => {
            return <div key={index} style={styleInlineText} onClick={this.onDeleteChar.bind(this, index)}>{letter}</div>
        }));

        return (
            <div className="from-group">
                <label htmlFor="input-text">Enter value: </label>
                <input 
                type="text" 
                onChange={this.getValueJustEnter} 
                id="input-text" 
                value={this.state.validation} 
                />
                <p>value entered: {this.state.validation}</p>
                {content}
            </div>
        );
    }
}

export default Validation;