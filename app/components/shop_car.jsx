import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class Secur_vail extends Component {
    render(){
        return (
            <div className="mod-safe-box">
                <div className="mod-safe-msg">
                    <span>
                        <em></em>
                        <span className="msg">您正在安全购物环境中，请放心购物</span>
                    </span>
                </div>
            </div>
        );
    }
}

class Checkbox extends Component {
    render(){
        return (
            <div>
                <div className="check-box">
                    <span className="check"></span>
                </div>
                <input type="hidden" />
            </div>
        );
    }
}
class Settlement extends Component {
    render(){
        return(
            <div className="fixed-nav">
                <div className="allcheck">
                    <div className="mod-check">
                        <Checkbox />
                        <div className="title">
                            <strong>全选</strong>
                        </div>
                    </div>
                </div>
                <div className="sum">
                    <strong>合计:¥0.00</strong>
                    <span>
                        总额:
                        <i>¥0.00</i>
                        立减:
                        <i>¥0.00</i>
                    </span>
                </div>
                <div className="btn">
                    <a href="javascript:;">
                        结算(<span>0</span>)
                    </a>
                </div>
            </div>
        );
    }
}
class Priceandcount extends  Component {
    render(){
        return (
            <div className="ft">
                <div className="price">
                    ¥
                    <strong>10</strong>
                    .90
                </div>
                <div className="count">
                    <div className="line">
                        <a href="javascript:;" className="reduce"></a>
                        <input type="tel" className="num" defaultValue="1" />
                        <a href="javascript:;" className="add"></a>
                    </div>
                </div>
            </div>
        );
    }
}

class List_item extends Component {
    render(){
        return (
            <li className="items">
                <div className="mod-check">
                    <Checkbox />
                </div>
                <div className="detail">
                    <div className="info">
                        <div className="msg">
                            <div className="info-detail">
                                【京东超市】百草味 年货水果干 芒果干120g/袋 菲律宾风味 蜜饯零食小吃干果果脯
                            </div>
                            <div className="scale">
                                <i>重量:0.13kg</i>  <i>规格:芒果干120g/袋</i>
                            </div>
                            <div className="tag"></div>
                            <Priceandcount/>
                        </div>
                    </div>
                    <div className="img">
                        <a href="http://www.baidu.com">
                            <img src="//img10.360buyimg.com/n7/s176x176_jfs/t2839/291/3422214156/330825/606e173b/578deb75Nf446479a.jpg!q70.jpg" alt=""/>
                        </a>
                    </div>
                </div>
            </li>
        );
    }
}
class Goods_list extends Component {
    render(){
        return (
            <div>
                <Secur_vail />
                <div className="shop-group">
                    <div className="mod-title">
                        <div className="mod-check">
                            <Checkbox />
                            <div className="title">
                                <span>京东自营</span>
                            </div>
                        </div>
                    </div>
                    <ul className="">
                        <List_item />
                        <List_item />
                        <List_item />
                        <List_item />
                        <List_item />
                        <List_item />
                        <List_item />
                    </ul>
                </div>
                <div className="fixed-line">
                    <div className="shop-group">
                        <Settlement />
                    </div>
                </div>
            </div>
        );
    }
}
export default Goods_list