import { Button, Card, Input, Row } from "antd";
import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  creds = async (value, label) => {
    await this.setState({ [label]: value });
  };
  async componentDidMount() {
    const tenants = {
      active_tenant: "DBTEST",
      status: "ok",
      tenants: ["ExafluenceRepo", "ExafluenceRepoTest", "DBTEST", "TEST_TRAIL"],
    };
    await localStorage.setItem("tenants", JSON.stringify(tenants));
  }

  render() {
    return (
      <div style={{ marginTop: "6%" }}>
        <Card
          bordered={true}
          style={{
            // background: "lavender",
            width: "50%",
            marginLeft: "2%",
            border: "1px solid rgba(0, 0, 0, 0.125)",
            borderRadius: "0.25rem",
          }}
        >
          <h3>Login</h3>
          <Row>
            <Input
              style={{ width: "45%", marginTop: "1%" }}
              placeholder="Email"
              onChange={(e) => this.creds(e.target.value, "email")}
            />
          </Row>
          <Row>
            <Input.Password
              style={{ width: "45%", marginTop: "2%" }}
              placeholder="password"
              onChange={(e) => this.creds(e.target.value, "password")}
            />
          </Row>
          <Row>
            <Button style={{ marginTop: "2%", width: "20%" }} type="primary">
              Login
            </Button>
          </Row>
        </Card>
      </div>
    );
  }
}
