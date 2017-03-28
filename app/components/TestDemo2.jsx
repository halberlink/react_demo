import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'



class Counter extends Component{
    render(){
        const {value,onIncreaseClick} = this.props;
        return(
            <div>
                <span>{value}</span>
                <input type="button" onClick={onIncreaseClick} defaultValue="加"></input>
            </div>
        );
    }
}

class Dialog extends Component{
    render(){
        return(
            <div>
                <span></span>
            </div>
        );
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}
// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

// Store
const Store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
class Prov extends Component{
    render(){
        return(
            <div>
                <Provider store={Store}>
                    <App />
                </Provider>
            </div>
        );
    }
}
export default Prov;



