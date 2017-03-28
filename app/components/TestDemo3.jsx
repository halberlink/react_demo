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
    constructor(props){
        super(props)
    }
    onsub() {
        Store.dispatch(createTextAction({status:this.props.status,inner:this.refs.mytext.value}));
    }
    render(){
        console.log(this.props.status);
        return(
            <div className={this.props.status?'on-show':'on-hide'}>
                <div className="mod-dialog">
                    <span>title</span>
                    <div onClick={this.onsub}>关闭</div>
                    <input type="text" ref="mytext" defaultValue="" />
                </div>
            </div>
        );
    }
}
Counter.propTypes = {
    value: PropTypes.string.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

//showdialogAction
function showDialog(){

}
//createTextAction
function createTextAction(dialogaction){
    const {status,inner} = dialogaction;
    return {
        type:'submit',
        status:status,
        inner:inner
    }
}
//定义action
const increaseAction={type:'increase'};
//定义reducer
function contener(state={inner:'测试文字'},action){
    console.log(state.inner);
    const inner = state.inner;

    switch (action.type){
        case 'increase':
            console.log(action.status);
            return {
                inner:inner,
                status:action.status
            };
            break;
        case 'submit':
            const newinner = action.inner;
            return{
                status:false,
                inner:newinner
            };
        default:
            return state;
    }
}
//创建store
const Store = createStore(contener);
// Map Redux state to component props
function mapStateToProps1(state,ownprops) {
    return {
        value: state.inner
    }
}
// Map Redux actions to component props
function mapDispatchToProps1(dispatch){
    return {
        onIncreaseClick:()=>dispatch({
            type:'increase',
            status:true
        })
    }
}
// dialog Redux state to component props
function mapStateToProps2(state,ownprops) {
    return {
        status: true
    }
}
// dialog Redux actions to component props
function mapDispatchToProps2(dispatch){
    return {
        onIncreaseClick:()=>dispatch({
            type:'submit'
        })
    }
}
const App = connect(
    mapStateToProps1,
    mapDispatchToProps1
)(Counter);
const DialogCom = connect(
    mapStateToProps2
)(Dialog);
class Prov extends Component{
    render(){
        return(
            <div>
                <Provider store={Store}>
                    <div>
                        <App />
                        <DialogCom />
                    </div>
                </Provider>
            </div>
        );
    }
}
export default Prov;



