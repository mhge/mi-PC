import React, { Component } from "react";
import { Table, Button, Modal } from "antd";
import { NavLink } from "react-router-dom";
import "../css/shou.css";
import $ from "jquery";

const { confirm } = Modal;
const columns = [
  {
    title: "收货人姓名",
    dataIndex: "receiver",
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: text => <a href="">{text}</a>
  },
  {
    title: "手机号",
    dataIndex: "mobile"
  },
  {
    title: "地区信息",
    dataIndex: "regions"
  },
  {
    title: "详细地址",
    dataIndex: "address"
  }
];

export default class Shou extends Component {
  selectRow = record => {
    const key = [...this.state.key];
    if (key.indexOf(record.key) >= 0) {
      key.splice(key.indexOf(record.key), 1);
    } else {
      key.push(record.key);
    }
    this.setState({ key });
  };
  onkeyChange = key => {
    this.setState({ key });
  };
  constructor(props) {
    super(props);
    this.state = {
      lis: [],
      key: [],
      Num: [],
      token: localStorage.getItem("token")
    };
  }
  showConfirm() {
    confirm({
      title: "请确认收货地址？",
      content: "点击确认按钮将跳转至付款页面",
      onOk() {
        console.log("确认");
      },
      onCancel() {
        console.log("取消");
      }
    });
  }
  render() {
    const { key } = this.state;
    const rowSelection = {
      key,
      onChange: this.onkeyChange
    };
    return (
      <div>
        <h2>收货地址</h2>
        {/* <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.lis}
        /> */}
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.lis}
          onRow={record => ({
            onChange: () => {
              // console.log(record._id);
              this.setState({
                Num: record._id
              });
            }
          })}
        />
        <NavLink to="./xin">
          <Button type="primary">新增</Button>
        </NavLink>
        <Button onClick={this.del.bind(this)}>删除</Button>
        <hr />
        <NavLink to="./pay">
          <Button onClick={this.showConfirm.bind.this}>去付款</Button>
        </NavLink>
      </div>
    );
  }
  componentDidMount() {
    let _this = this;
    this.forceUpdate();
    $.ajax({
      type: "get",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + _this.state.token
      },
      url: "http://api.cat-shop.penkuoer.com/api/v1/addresses",
      data: {
        per: 10,
        page: 1
      },
      success: function(data) {
        data.addresses.forEach((item, i) => {
          item.key = i + 1;
        });
        _this.setState({ lis: data.addresses });
        //  console.log(_this.state.lis);
      }
    });
  }
  del() {
    var _this = this;
    confirm({
      title: "确认删除地址吗？",

      onOk() {
        $.ajax({
          type: "delete",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + _this.state.token
          },
          url:
            "http://api.cat-shop.penkuoer.com/api/v1/addresses/" +
            _this.state.Num,
          dataType: "json",
          success: function(msg) {
            _this.state.lis.splice(0, 1);
            _this.forceUpdate();
          }
        });
      },
      onCancel() {
        console.log("取消");
      }
    });
  }
}
