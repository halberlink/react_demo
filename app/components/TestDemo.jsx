import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class Fatherdemo extends Component {
    constructor(props){
        super(props);
        this.state={
            checked:true
        }
        this.onsonChange=this.onsonChange.bind(this);
    }
    onsonChange(newstate){
        this.setState({
            checked:newstate
        });
    }
    render(){
        var isChecked = this.state.checked?"yes":"no"
        console.log(this.state.checked);
        return (
            <div>
                <div>Are you checked ? {isChecked}</div>
                <Son text={this.props.text} checked={this.state.checked} updateChecked={this.onsonChange} />
            </div>
        );
    }
}
class Son extends Component {
    constructor(porps){
        super(porps);
        this.state={
          checked:this.props.checked
        }
        this.onTextchange=this.onTextchange.bind(this);
    }
    onTextchange() {
        console.log(this)
        var newstate = !this.state.checked;
        console.log(this.state.checked);
        this.setState({
            checked: newstate
        });
        this.props.updateChecked(newstate);
    }
    render(){
        var {text,checked,update} = this.props;
        return(
            <div>{text}
                <input type="checkbox" defaultChecked={checked} onChange={this.onTextchange}/>
            </div>
        );
    }
}
export default Fatherdemo;