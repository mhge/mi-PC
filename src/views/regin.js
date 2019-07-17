import React, { Component } from "react";
import regin from "../css/regin.module.css";
import { Modal, Tooltip, Button, Input } from "antd";
import $ from "jquery";

class Regin extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className={regin.tt}>
        <p>
          <img
            alt=""
            ref="avatar"
            className={regin.img}
            src="https://i03picsos.sogoucdn.com/fd6f8c1f1dc350cd"
          />
        </p>
        <Tooltip placement="topLeft" title="昵称 3 - 12 位字母数字或下划线">
          <p>
            <Input
              placeholder="nickName"
              ref="nickName"
              addonBefore="昵称："
              size="default"
            />
          </p>
        </Tooltip>
        <Tooltip placement="topLeft" title="用户名 3 - 12 位字母数字或下划线">
          <p>
            <Input
              placeholder="username"
              ref="username"
              addonBefore="用户名："
              size="default"
            />
          </p>
        </Tooltip>
        <Tooltip placement="right" title="密码 4 - 16 位字母数字或下划线组成">
          <p>
            <Input
              placeholder="password"
              ref="password"
              addonBefore="密码："
              size="default"
            />
          </p>
        </Tooltip>
        <Button ghost className={regin.left} onClick={this.regin.bind(this)}>
          注册账号
        </Button>
        <Button
          type="dashed"
          ghost
          className={regin.right}
          onClick={this.login.bind(this)}
        >
          已注册 去登录
        </Button>
      </div>
    );
  }
  login() {
    this.props.history.push("/login");
  }

  regin() {
    var _this = this;
    if (this.refs.nickName.state.value === undefined) {
      Modal.warning({
        title: "请填写昵称",
        content: "请输入中文"
      });
    } else {
      if (this.refs.nickName.state.value !== undefined) {
        var rng = /^[\u2E80-\u9FFF]{2,5}$/;
        if (!rng.test(this.refs.nickName.state.value)) {
          Modal.error({
            title: "昵称格式不正确",
            content: "请输入中文"
          });
        } else {
          if (this.refs.username.state.value === undefined) {
            Modal.warning({
              title: "用户名不可为null",
              content: "请输入中文"
            });
          } else {
            if (this.refs.username.state.value !== undefined) {
              var reg = /^[\u2E80-\u9FFF]{2,5}$/;

              if (!reg.test(this.refs.username.state.value)) {
                Modal.error({
                  title: "用户名格式不正确",
                  content: "请输入中文"
                });
              } else {
                if (this.refs.password.state.value === undefined) {
                  // alert("密码不可为空");
                  Modal.warning({
                    title: "密码不可为null"
                  });
                } else {
                  if (this.refs.password.state.value !== undefined) {
                    var ig = /^\w{4,16}$/;
                    if (!ig.test(this.refs.password.state.value)) {
                      // alert("密码 4 - 16 位字母数字或下划线组成");
                      Modal.error({
                        title: "密码格式不正确",
                        content: "密码 4 - 16 位字母数字或下划线组成"
                      });
                    } else {
                      $.ajax({
                        type: "post",
                        url: "http://api.cat-shop.penkuoer.com/api/v1/auth/reg",
                        data: {
                          userName: _this.refs.username.state.value,
                          password: _this.refs.password.state.value,
                          nickName: _this.refs.nickName.state.value,
                          avatar: _this.refs.avatar.src
                        },
                        async: true,
                        dataType: "json",
                        success: function(data) {
                          if (data.code === "success") {
                            console.log(_this.refs.avatar.src);
                            // alert("注册成功");
                            Modal.success({
                              title: "注册成功"
                            });
                            _this.props.history.push("/login");
                          } else {
                            // alert("该用户名已被注册,请重新注册");
                            Modal.error({
                              title: "用户名重复",
                              content: "该用户名已被注册,请重新注册"
                            });
                          }
                        }
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
export default Regin;
