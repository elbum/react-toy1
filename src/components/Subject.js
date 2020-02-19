import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <header>
                <a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeXPage();
                }.bind(this)}>
                <h1> {this.props.tittle} </h1>
                </a>
                {this.props.sub}
            </header>
        );
    }
}
export default Subject;
