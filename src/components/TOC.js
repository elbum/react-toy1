import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log(newProps.data, this.props.data);
        if (this.props.data === newProps.data) {
            return false   // no render
        } else {
            return true  //render
        }

    }
    render() {
        var lists = [];
        var data = this.props.data;
        console.log(this.props.data);
        console.log(data);
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id} data-id={data[i].id} onClick={function (id, e) {
                        e.preventDefault();
                        var d = e.target.dataset.id;
                        // debugger;
                        this.props.onChangePage(d);
                    }.bind(this, data[i].id)}>
                        {data[i].title} </a>
                </li>);
            i = i + 1;
        }
        console.log(lists)
        return (

            <ul>
                component
                {lists}
            </ul>

        );
    }
}
export default TOC;
