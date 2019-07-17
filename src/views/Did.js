import React, { Component } from "react";

import { Layout, Menu} from "antd";
import "../css/did.css";
import $ from "jquery";

const { Header, Content} = Layout;

export default class Did extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lis: []
    };
  }
  render() {
    return (
      <div>
        <h2 className="dcc">我的订单</h2>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1" onClick={this.qb.bind(this)}>
                全部
              </Menu.Item>
              <Menu.Item key="2">待付款</Menu.Item>
              <Menu.Item key="3">待收货</Menu.Item>
              <Menu.Item key="4">已完成</Menu.Item>
              <Menu.Item key="5">已取消</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 580 }} />
          </Content>
        </Layout>
      </div>
    );
  }
  qb() {
    console.log(11);
    let token = localStorage.getItem("token");
    console.log(token);
    $.ajax({
      type: "get",
      headers: { Accept: "application/json", Authorization: "Bearer " + token },
      url: "http://api.cat-shop.penkuoer.com/api/v1/orders",
      data: {
        per: 10,
        page: 1
      },
      success: function(data) {
        console.log(data);
      }
    });
  }
}
