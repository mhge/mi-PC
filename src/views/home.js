import React, { Component } from "react";
import { Avatar, Input, Icon, Carousel, Card } from "antd";
import home from "../css/home.module.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
const { Search } = Input;
const { Meta } = Card;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }
  render() {
    return (
      <div>
        <div className={home.nav}>
          <Avatar
            size={100}
            shape="square"
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=743414581,3909844895&fm=11&gp=0.jpg"
          />
          <ul>
            <li>小米手机</li>
            <li>小米手机</li>
            <li>小米手机</li>
            <li>小米手机</li>
            <li>小米手机</li>
            <li>小米手机</li>
            <li>小米手机</li>
            <li>小米手机</li>
            <li>
              <Search
                placeholder="请输入手机型号"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </li>
          </ul>
        </div>
        <div className={home.banner}>
          <ul>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
            <li>
              <strong>手机</strong>
              <strong>电话卡</strong>
              <Icon type="right" />
            </li>
          </ul>
          <Carousel autoplay>
            <div>
              <h3>
                <img
                  src="//i1.mifile.cn/a4/xmad_15625789613185_yOkET.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  src="//i1.mifile.cn/a4/xmad_15625556540966_BPGou.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  src="//i1.mifile.cn/a4/xmad_15625789613185_yOkET.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  src="//i1.mifile.cn/a4/xmad_15625789613185_yOkET.jpg"
                  alt=""
                />
              </h3>
            </div>
          </Carousel>
        </div>

        <div className={home.set}>
          <ul>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <div>小米CC9</div>
              <p>1799元起</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <div>小米CC9</div>
              <p>1799元起</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <div>小米CC9</div>
              <p>1799元起</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <div>小米CC9</div>
              <p>1799元起</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <div>小米CC9</div>
              <p>1799元起</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <div>小米CC9</div>
              <p>1799元起</p>
            </li>
          </ul>
        </div>
        <div className={home.left}>
          <ul>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
            <li>
              <img src="//i1.mifile.cn/f/i/2019/micc9/_320.png" alt="" />
              <p>手机</p>
            </li>
          </ul>
        </div>
        <div className={home.img}>
          <img src="//i1.mifile.cn/a4/xmad_15625124400944_XhGDZ.jpg" alt="" />
          <img src="//i1.mifile.cn/a4/xmad_15625124400944_XhGDZ.jpg" alt="" />
          <img src="//i1.mifile.cn/a4/xmad_15625124400944_XhGDZ.jpg" alt="" />
          <img src="//i1.mifile.cn/a4/xmad_15625124400944_XhGDZ.jpg" alt="" />
        </div>
        <div className={home.big}>
          <img alt="" src="//i1.mifile.cn/a4/xmad_15626634988829_RrSfi.jpg" />
        </div>
        <div className={home.card}>
          {this.state.info.map(function(item, i) {
            return (
              <div className={home.tt} key={i}>
                <NavLink
                  to={{ pathname: "/main/detail", search: "id=" + item._id }}
                >
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta title={item.name} description={item.price} />
                  </Card>
                </NavLink>
              </div>
            );
          })}
        </div>

        <div className={home.big}>
          <img alt="" src="//i1.mifile.cn/a4/xmad_15626634988829_RrSfi.jpg" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    let token = localStorage.getItem("token");
    var _this = this;
    $.ajax({
      type: "get",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token
      },
      url: "http://api.cat-shop.penkuoer.com/api/v1/products",
      dataType: "json",
      data: { per: 4, page: 1 },
      success: function(msg) {
        console.log(msg.products);
        _this.setState({
          info: msg.products
        });
      }
    });
    $(".home_nav__I7gbB li").hover(
      function() {
        $(this).css({ color: "orange" });
        $(".home_set__331GZ").css({ display: "block" });
      },
      function() {
        $(this).css({ color: "black " });
        $(".home_set__331GZ").css({ display: "none" });
      }
    );
    $(".home_banner__1EiJX  li").hover(
      function() {
        $(this).css({ background: "orangered" });
        $(".home_left__1t01g").css({ display: "block" });
      },
      function() {
        $(this).css({ background: " rgba(0, 0, 0, 0.2) " });
        $(".home_left__1t01g").css({ display: "none" });
      }
    );
  }
}
export default Home;
