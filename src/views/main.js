import React, { Component } from "react";
import { Layout, Icon } from "antd";
import "antd/dist/antd.css";
import main from "../css/main.module.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import Cart from "./cart";
import Shou from "./Shou";
import Xin from "./Xin";
import Pay from "./Pay";
import $ from "jquery";
var ss = { display: " none " };
var s = { display: " block " };
const { Header, Content } = Layout;

class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      info: ""
    };
  }
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <div>
              <ul>
                <li>小米商城</li>
                <li>小米商城</li>
                <li>小米商城</li>
                <li>小米商城</li>
                <li>小米商城</li>
                <li>小米商城</li>
                <li>小米商城</li>
                <li>小米商城</li>
              </ul>
              <ul>
                <li className="login" ref="login" style={s}>
                  <NavLink to="/login">登录</NavLink>
                  <NavLink to="/regin">注册</NavLink>
                </li>
                <li className={main.users} ref="user" style={ss}>
                  欢迎你 ,
                  <strong className={main.user}>{this.state.info} </strong>
                  <span onClick={this.out.bind(this)}>退出</span>
                </li>
                <li>消息通知</li>
                <li className="teshu">
                  <Icon type="shopping-cart" />
                  购物车
                </li>
              </ul>
            </div>
          </Header>

          <Content>
            <Router>
              <div>
                <Route path="/main/home" component={Home} />
                <Route path="/main/detail" component={Detail} />
                <Route path="/main/cart" component={Cart} />
                <Route path="/main/shou" component={Shou} />
                <Route path="/main/xin" component={Xin} />
                <Route path="/main/pay" component={Pay} />
              </div>
            </Router>
          </Content>
        </Layout>
      </div>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    var _this = this;
    $.ajax({
      type: "get",
      headers: { Accept: "application/json", Authorization: "Bearer " + token },
      url: "http://api.cat-shop.penkuoer.com/api/v1/users/info",
      dataType: "json",
      success: function(msg) {
        //console.log(msg.userName);
        _this.setState({
          info: msg.userName
        });
      }
    });
    if (token) {
      this.refs.login.style.display = " none";
      this.refs.user.style.display = "block";
    } else {
      this.refs.login.style.display = " block";
      this.refs.user.style.display = "none";
    }
    $("header li").hover(
      function() {
        $(this).css({ color: " white" });
      },
      function() {
        $(this).css({ color: "#b0b0b0" });
      }
    );
  }
  out() {
    localStorage.removeItem("token");
    let token = localStorage.getItem("token");
    if (token) {
      this.refs.login.style.display = " none";
      this.refs.user.style.display = "block";
    } else {
      this.refs.login.style.display = " block";
      this.refs.user.style.display = "none";
    }
  }
}
export default Main;
