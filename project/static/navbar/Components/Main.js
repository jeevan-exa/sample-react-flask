import { Tooltip, Button, Col, Dropdown, Menu, Row, Tag } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { Component } from "react";
import { DownOutlined } from "@ant-design/icons";
import axios from "axios";

const { SubMenu } = Menu;

export default class Main extends Component {
  state = {
    tenants: {
      active_tenant: "DBTEST",
      status: "error",
      tenants: ["ExafluenceRepo", "ExafluenceRepoTest", "DBTEST", "TEST_TRAIL"],
    },
    hostUrl: "",
  };
  async componentDidMount() {
    // console.log(window.location.host);
    // console.log(window.location.protocol);

    this.setState({
      hostUrl: window.location.protocol + "//" + window.location.host,
    });

    // const tenants = await JSON.parse(localStorage.getItem("tenants"));
    // await console.log(tenants);
    // await this.setState({ tenants });
    const getTenants = await axios.get(
      this.state.hostUrl+"/get_user_tenants"
    );
    const tenants = await getTenants.data;
    this.setState({ tenants });
    console.log(getTenants.data);
    const tenantMenuItems = tenants.tenants.map((tenant) =>
        <Menu.Item>
          <a href={this.state.hostUrl+"/change_active_tenant/"+tenant}>{tenant}</a>
        </Menu.Item>
      );
    this.setState({ tenantMenuItems });
  }

  render() {
    const menu = (
      <Menu>
        <SubMenu title="Business Analyst Interface">
          <Menu.Item><a href={this.state.hostUrl + '/data_sources'}>Data Sources</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/metadata_search'}>Metadata Search</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/stmdmapping'}>Metadata Matching</a></Menu.Item>
        </SubMenu>
        <SubMenu title="Business Rules">
          <Menu.Item><a href={this.state.hostUrl + '/tr_test_3'}>Transformation Rules</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/glossary'}>Metadata Catalog</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/tr_rule_edit'}>Rules Catalog</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/run_tr_rule'}>Run Rules</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/gen_pdf2'}>Transformation Rules Report</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/report_one'}>Datasource Report</a></Menu.Item>
        </SubMenu>
        <SubMenu title="Investment Warehouse">
          <Menu.Item><a href={this.state.hostUrl + '/snowflake'}>Snowflake DataModel</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/snowflake_erd'}>Snowflake ERD Diagram</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/saphana'}>SAP Hana DB</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/#'}>SAP Data Intelligence</a></Menu.Item>
        </SubMenu>
        <SubMenu title="Audit Trail">
          <Menu.Item><a href={this.state.hostUrl + '/tr_audit'}>Business Rules Audit</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/mdmp_audit'}>Metadata Mappings Audit</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/view_logs'}>View Logs</a></Menu.Item>
        </SubMenu>
        <SubMenu title="Dashboards">
          <Menu.Item><a href={this.state.hostUrl + '/st_dashboard'}>Operational Dashboard</a></Menu.Item>
          <Menu.Item><a href={this.state.hostUrl + '/logs_dashboard'}>Logs Dashboard</a></Menu.Item>
        </SubMenu>
        <SubMenu title="API's">
          <Menu.Item><a href={this.state.hostUrl + '/new_api_form'}>Rest APIs Documentation</a></Menu.Item>
        </SubMenu>
      </Menu>
    );
    const adminMenu = (
      <Menu>
        <Menu.Item>
          Active Tenant: {"  "}{" "}
          <Tag color="cyan" style={{ borderRadius: "5px" }}>
            { this.state.tenants.status === "ok" ? this.state.tenants.active_tenant : "Not Logged In"}
          </Tag>{" "}
        </Menu.Item>
        <hr/>
        <Menu.ItemGroup title="Tenants">
          {this.state.tenantMenuItems}
        </Menu.ItemGroup>
        <hr/>
        <Menu.Item>
          <a href={this.state.hostUrl+"/profile"}>Profile</a>
        </Menu.Item>
        <Menu.Item>
          <a href={this.state.hostUrl+"/change_pwd"}>Reset Password</a>
        </Menu.Item>
        <Menu.Item>
          <a href={this.state.hostUrl+"/role_management"}>User Management</a>
        </Menu.Item>
        <hr/>
        <Menu.Item>
          <a href={this.state.hostUrl+"/logout"}>Logout</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        {" "}
        <Layout className="layout">
          <Header
            style={{
              zIndex: 1000,
              padding: "0px",
              width: "100%",
              background: "linear-gradient(#0e3f73,#0e3f73,#0e3f73)",
            }}
          >
            <div>
              <Row>
                <Col span={3} style={{background:"#FFF",textAlign:"center"}}>
                <Tooltip placement="bottom" title={(<a href={this.state.hostUrl+"/edit_logo"}>Edit Logo</a>)}>
                  <a href={this.state.hostUrl}>
                  <img
                    src={this.state.tenants.logo_url}
                    style={{ }}
                    alt="Exafluence Logo"
                  />
                  </a>
                </Tooltip>
                  
                </Col>
                <Col span={9}>
                  <Dropdown trigger={"click"} overlay={menu}>
                    <Button
                      style={{
                        width: "100px",
                        lineHeight: "19px",
                        fontSize: "16px",
                        fontWeight: "Bold",
                        margin: "0px 16px"
                      }}
                    >
                      Menu <DownOutlined style={{ marginLeft: "40%" }} />
                    </Button>
                  </Dropdown>
                </Col>
                {this.state.tenants.status === "error" ? (
                  <Col span={12}>
                    <span
                      style={{
                        float: "right",
                      }}
                    >
                      <a href={this.state.hostUrl + "/login"}>
                        <Button
                          style={{
                            margin: "0px 16px",
                            borderRadius: "2px",
                            width: "80px",
                          }}
                          onClick={() => this.login()}
                        >
                          Login
                        </Button>
                      </a>
                      <a href={this.state.hostUrl + "/signup"}>
                        <Button
                          style={{
                            margin: "0px 16px",
                            borderRadius: "2px",
                            width: "80px",
                          }}
                        >
                          Register
                        </Button>
                      </a>
                    </span>
                  </Col>
                ) : (
                  <Col span={12}>
                    <span
                      style={{
                        float: "right",
                      }}
                    >
                      <Dropdown trigger={"click"} overlay={adminMenu}>
                        <img
                          src={this.state.tenants.profile_url}
                          alt="Admin image"
                          style={{ 
                            margin: "0px 16px",
                            maxHeight: "48px",
                            border: "2px solid white",
                            borderRadius: "50%",
                            background: "#fff",
                            }}
                        />
                      </Dropdown>
                    </span>
                  </Col>
                )}
              </Row>
            </div>
            <div style={{
                  height: "4px",
                  width: "100%",
                  background: "#ff4d4f"
              }}>
              
            </div>
          </Header>
          {/* <Layout style={{ height: "-webkit-fill-available" }}>
            <Content>
              <Route
                exact
                path="/"
                render={(props) => <Landingpage {...props} />}
              />
              <Route
                exact
                path="/login"
                render={(props) => <Login {...props} />}
              />
            </Content>
          </Layout> */}
          {/* <Footer
            style={{
              left: 0,
              bottom: 0,
              fontSize: "1.1vw",
              position: "fixed",
              right: 0,
              width: "100%",
              margin: "auto",
              height: "3.2vw",
              background: "linear-gradient(#0e3f73,#4e7bad,#0e3f73)",
              color: "white",
            }}
          >
            <Row gutter={16} style={{ marginTop: "-1%" }}>
              <Col offset={11} span={14}>
                <span style={{ fontFamily: "Arial", marginBottom: "15%" }}>
                  Copyright &copy; {new Date().getFullYear()}
                </span>
              </Col>
            </Row>
          </Footer> */}
        </Layout>
      </div>
    );
  }
}
