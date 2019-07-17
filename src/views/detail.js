import React, { Component } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import { Button, InputNumber, Card } from "antd";
import detail from "../css/detail.module.css";

const { Meta } = Card;
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      id: this.props.location.search.split("=")[1],
      token: localStorage.getItem("token")
    };
  }

  render() {
    return (
      <div>
        <h2>商品详情</h2>

        <Card
          className={detail.carts}
          style={{ width: 1230 }}
          cover={
            <img
              className={detail.img}
              alt="example"
              src="//i1.mifile.cn/a4/xmad_15622510128252_KCJTO.jpg 2x"
            />
          }
          actions={[
            <div> 单 价 : {this.state.data.price}</div>,
            <InputNumber min={1} max={100} defaultValue={1} ref="num" />,

            <NavLink to="/main/cart">
              <Button
                onClick={this.btn.bind(this)}
                icon="shopping-cart"
                type="primary"
              >
                加入购物车
              </Button>
            </NavLink>
          ]}
        >
          <Meta
            title={this.state.data.name}
            description={this.state.data.descriptions}
          />
        </Card>
      </div>
    );
  }
  componentDidMount() {
    var _this = this;
    // 通过id获取商品详情
    $.ajax({
      type: "get",
      url: "http://api.cat-shop.penkuoer.com/api/v1/products/" + _this.state.id,
      dataType: "json",
      success: function(msg) {
        //   console.log(msg);
        _this.setState({
          data: msg
        });
      }
    });
  }
  //将商品加入购物车
  btn() {
    //  console.log(this.refs.num.inputNumberRef.state.value);
    var _this = this;
    $.ajax({
      type: "post",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + this.state.token
      },
      url: "http://api.cat-shop.penkuoer.com/api/v1/shop_carts",
      data: {
        product: _this.state.id,
        quantity: _this.refs.num.inputNumberRef.state.value
      },
      dataType: "json",
      success: function(msg) {
        // console.log(msg);
      }
    });
  }
}
export default Detail;
