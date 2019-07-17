/* eslint-disable array-callback-return */
import React, { Component } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import cart from "../css/cart.module.css";
import { List, Button, Input, Row, Col, Modal } from "antd";

const { confirm } = Modal;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      cart: [],
      arr: "",
      num: ""
    };
  }
  render() {
    return (
      <div>
        <h4>购物车列表</h4>
        <div>
          <div className={cart.tt}>
            <Row className={cart.row}>
              <Col span={6}>
                <h2>商品</h2>
              </Col>
              <Col span={6}>
                <h2>价格 </h2>
              </Col>
              <Col span={5}>
                <h2>数量 </h2>
              </Col>
              <Col span={6}>
                <h2>操作</h2>
              </Col>
            </Row>
          </div>
          <div className={cart.list}>
            <List
              itemLayout="horizontal"
              dataSource={this.state.cart}
              renderItem={(item, i) => (
                <List.Item>
                  <List.Item.Meta
                    title={"商品名称:" + item.product.name}
                    description={"产品描述:" + item.product.descriptions}
                    className={cart.flex}
                  />
                  <Row className={cart.row}>
                    <Col span={4}>
                      <Input
                        placeholder={item.product.price}
                        className={cart.cc}
                      />
                    </Col>
                    <Col span={4}>
                      <Input
                        className={cart.num}
                        defaultValue={item.quantity}
                        onChange={this.onChange.bind(this)}
                      />
                    </Col>

                    <Col span={4}>
                      <Button type="primary" className={cart.count}>
                        合计:
                        {item.product.price * item.quantity}
                      </Button>
                    </Col>

                    <Col span={4}>
                      <NavLink to="/main/shou">
                        <Button className={cart.counts} type="primary">
                          去结算
                        </Button>
                      </NavLink>
                    </Col>
                    <Col span={6} className={cart.del}>
                      <Button
                        onClick={this.showConfirm.bind(this, item._id, i)}
                      >
                        删除
                      </Button>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
            <div className={cart.count}>
              <Button size="large" type="primary">
                合计:{this.setState.num ? this.setState.num : this.state.arr}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    var _this = this;
    $.ajax({
      type: "get",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + _this.state.token
      },
      url: "http://api.cat-shop.penkuoer.com/api/v1/shop_carts",
      dataType: "json",
      success: function(msg) {
        console.log(msg);
        var num = 0;
        msg.map(function(item, i) {
          num = num + item.product.price * item.quantity;
          // console.log(num);
          _this.setState({
            arr: num
          });
        });
        _this.setState({
          cart: msg
        });
      }
    });
  }
  onChange(value) {
    console.log(value);
    this.setState.num = value;
  }
  showConfirm(id, i) {
    var _this = this;
    // console.log(i);
    confirm({
      title: "确认删除",
      content: "你真的打算删除该商品吗?",
      onOk() {
        console.log(id);
        $.ajax({
          type: "delete",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + _this.state.token
          },
          url: "http://api.cat-shop.penkuoer.com/api/v1/shop_carts/" + id,
          dataType: "json",
          success: function(msg) {
            _this.state.cart.splice(i, 1);
            var num = 0;
            _this.state.cart.map(function(item, i) {
              console.log(item.product.price);
              num = num + item.product.price * item.quantity;
              console.log(num);
            });
            _this.setState({
              arr: num
            });
            _this.forceUpdate(); //强制更新页面
          }
        });
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }
}
export default Cart;
