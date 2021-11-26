import React, { Component } from 'react';

class Counter extends Component {
    state = {
       count: 0
    };

    handleClick = () => {
       this.setState(prev => ({ count: prev.count + 1 }));
    };

    render() {
        return (
            <button className="btn productBtn" onClick={this.handleClick}>
                <div className="counter">{this.state.count}</div>
            </button>
        );
    }
}

export default Counter;