/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Result, Icon, Button } from "antd";
class Pay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>付款</h4>
        <Result
          icon={<Icon type="smile" theme="twoTone" />}
          title="恭喜你，付款成功，宝贝正在路上快马加鞭的飞奔向你"
          extra={
            <Button type="primary" onClick={this.home.bind(this)}>
              返回首页
            </Button>
          }
        />
      </div>
    );
  }
  home() {
    this.props.history.push("./home");
  }
}
export default Pay;
