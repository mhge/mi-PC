import React, {
	Component
} from "react";
import {
	NavLink
} from "react-router-dom";
import {
	Tooltip,
	Form,
	Icon,
	Input,
	Checkbox,
	Modal
} from 'antd';

import "../css/login.module.css"
import $ from "jquery";
import "../css/login.css"



function onChange(value) {
	console.log('changed', value);
}
export default class Dl extends Component {
	render() {
			return ( 
				<div className = "container" >
				<div className = "left" / >
				<div className = "right" >
				<div className = "header" >
				<h2 className = "animation a1" > 欢迎回来 </h2> 
				<h4 className = "animation a2" > 使用用户及密码登入你的帐户 </h4> 
				</div> 
				<div className = "form" >
				<
				Form.Item >
				<
				Tooltip placement = "topRight" >
				<
				Input prefix = { 
					<Icon type = "user"
					style = {
						{
							color: 'rgba(0,0,0,.25)'
						}
					}
					/>}
					placeholder = "Username"
					ref = "username"
					className = " animation a3"
					onChange = {
						this.yao.bind(this)
					}
					
					suffix = { 
						<Tooltip title = "输入用户名" >
						<Icon type = "edit"
						style = {
							{
								color: 'rgba(0,0,0,.45)'
							}
						}
						/> 
						</Tooltip>
					}
					/> 
					</Tooltip> 
					</Form.Item>
					 <Form.Item >
					<
					Tooltip placement = "topRight" >
					<
					Input
					prefix = { < Icon type = "lock"
						style = {
							{
								color: 'rgba(0,0,0,.25)'
							}
						}
						/>}
						type = "password"
						placeholder = "Password"
						ref = "password"
						className = " animation a4"
						allowClear onChange = {
							onChange
						}
						suffix = { 
							<Tooltip title = "请输入密码" >
							<Icon type = "edit" style = {
								{
									color: 'rgba(0,0,0,.45)'
								}
							}
							/> 
							</Tooltip>
						}
						/> 
						</Tooltip> 
						</Form.Item> 
						<div className = "animation a5" >
						<Checkbox ref = "Checkbox" onChange = {this.jz.bind(this)} > Remember me </Checkbox> 
						<NavLink className = "forgot" to = "/regin" > Or register now! </NavLink> 
						</div>			 
						<button className = "animation a6"
						onClick = {
							this.login.bind(this)
						} >
						登录 </button> </div> </div> </div>
					);
				}
				confirm() {
					this.props.history.push("/regin");
				}
				jz() {
					let checked = this.refs.Checkbox.rcCheckbox.state.checked
					console.log()
					if (checked) {
						localStorage.removeItem('username', this.refs.username.state.value)
						localStorage.removeItem('password', this.refs.password.state.value)
						localStorage.setItem('checked', this.refs.Checkbox.rcCheckbox.state.checked = true)
					} else {
						localStorage.setItem('username', this.refs.username.state.value)
						localStorage.setItem('password', this.refs.password.state.value)
						localStorage.setItem('checked', this.refs.Checkbox.rcCheckbox.state.checked)
					}
				}
				yao() {
					localStorage.removeItem('password', this.refs.password.state.value)
					localStorage.removeItem('checked', this.refs.Checkbox.rcCheckbox.state.checked)
					// console.log(this.refs.Checkbox.rcCheckbox.state.checked)
					// console.log(this.refs.password.state.value)
					this.forceUpdate(); // 更新
					let nul = ''
					this.refs.password.state.value = nul
					let ken = false
					this.refs.Checkbox.rcCheckbox.state.checked = ken
				}
				componentDidMount() {
					this.forceUpdate();
					let rng = localStorage.getItem('checked')
					localStorage.removeItem('token');
					let username = localStorage.getItem('username')
					let password = localStorage.getItem('password')
					this.refs.username.state.value = username
					this.refs.password.state.value = password

					if (rng === 'true') {
						this.refs.Checkbox.rcCheckbox.state.checked = false
					} else {
						this.refs.Checkbox.rcCheckbox.state.checked = true
					}
				}
				login() {
			var _this=this;
					$.ajax({
						type: "post",
						url: 'http://api.cat-shop.penkuoer.com/api/v1/auth/login',
						data: {
							userName: _this.refs.username.state.value,
							password: _this.refs.password.state.value,
						},
						async: true,
						dataType: 'json',
						success: function(data) {
							if (data.code === "success") {
								Modal.success({
									title: '登录成功',
								});
								localStorage.setItem("token", data.token);
								localStorage.setItem("username", _this.refs.username.state.value);
								_this.props.history.push('/main/home')
							} else {
								Modal.error({
									title: '登陆失败',
									content: '电邮或密码错误，请重新输入！',
								});
							}
						}
					})
				}
			}