import React, { Component } from "react";
import { Row, Col, Input, Radio, Button } from "antd";
import "../css/xin.css";

import $ from "jquery";
// const columns = [
//   {
//     title: "商品名称",
//     dataIndex: "name"
//     // render: text => <a href="javascript:;">{text}</a>,
//   },
//   {
//     title: "价格/元",
//     dataIndex: "age"
//   },
//   {
//     title: "数量",
//     dataIndex: "num"
//   },
//   {
//     title: "商品详情",
//     dataIndex: "address"
//   }
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     num: 2,
//     address: "New York No. 1 Lake Park"
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     num: 2,
//     age: 42,
//     address: "London No. 1 Lake Park"
//   },
//   {
//     key: "3",
//     num: 2,
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park"
//   }
// ];
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: record => ({
//     disabled: record.name === "Disabled User", // Column configuration not to be checked
//     name: record.name
//   })
// };

export default class Xin extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <Table rowSelection={rowSelection} columns={columns} dataSource={data} /> */}
        <Row>
          <Col span={12} className="dzz">
            <h2 className="xin">新增收货地址</h2>
            <Input
              className="input"
              ref="sh"
              placeholder="收货人姓名"
              addonBefore="收货人姓名"
            />
            <Input
              className="input"
              ref="sj"
              placeholder="手机号"
              addonBefore="手机号"
            />
            <Input
              className="input"
              ref="dq"
              placeholder="地区信息"
              addonBefore="地区信息"
            />
            <Input
              className="input"
              ref="xx"
              placeholder="详细地址"
              addonBefore="详细地址"
            />
            <Radio.Group name="radiogroup" defaultValue={true} ref="ss">
              <span className="dzz">设为默认地址</span>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
            <hr />
            <Button type="primary" className="qd" onClick={this.qr.bind(this)}>
              保存
            </Button>
            <Button type="danger" className="qx">
              取消
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
  qr() {
    let token = localStorage.getItem("token");
    console.log(token);
    console.log(
      this.refs.ss.state.value,
      this.refs.sj.state.value,
      this.refs.dq.state.value,
      this.refs.xx.state.value
    );
    var _this = this;
    $.ajax({
      type: "post",
      headers: { Accept: "application/json", Authorization: "Bearer " + token },
      url: "http://api.cat-shop.penkuoer.com/api/v1/addresses",
      data: {
        receiver: _this.refs.sh.state.value,
        mobile: _this.refs.sj.state.value,
        regions: _this.refs.dq.state.value,
        address: _this.refs.xx.state.value,
        idDefault: _this.refs.ss.state.value
      },

      success: function(data) {
        if (data.code === "success") {
          alert("收货地址保存成功");
          _this.props.history.push("./shou");
        } else {
          alert("收货地址保存失败");
        }
      }
    });
  }
}
