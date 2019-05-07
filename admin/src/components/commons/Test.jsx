import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <div>{this.props.test.name}</div>    
            </div>
        );
    }
}

export default Test;