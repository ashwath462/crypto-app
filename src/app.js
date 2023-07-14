import React from "react";
// import 'antd/dist/reset.css';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
// import {Navbar} from './components';
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./app.css";
const app = () => {
  return (
    <div className="app">
      <div className="navbar">
        {/* <h1>CryptoWorld</h1>   */}
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="Routes">
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path="/crypto/:uuid"
                element={<CryptoDetails />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Text
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoworld <br />
            All rights reserved
          </Typography.Text>
          <Space>
            <Link to="/homepage">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrnecies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default app;
