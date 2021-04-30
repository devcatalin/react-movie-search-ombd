import "./App.css";

import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchView from "./views/SearchView";
import FavoritesView from "./views/FavoritesView";

import Navbar from "./components/Navbar";

import { useDispatch } from "react-redux";
import { initLocalProfile } from "./store/profileActions";

import { Layout } from "antd";

const { Content } = Layout;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initLocalProfile());
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Router>
        <Navbar />
        <Content>
          <div className="ContentContainer">
            <Switch>
              <Route path="/favorites">
                <FavoritesView />
              </Route>
              <Route path="/">
                <SearchView />
              </Route>
            </Switch>
          </div>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
