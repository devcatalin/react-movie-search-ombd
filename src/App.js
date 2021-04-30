import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Search from "./views/Search";
import Favorites from "./views/Favorites";
import Profile from "./views/Profile";

import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Router>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/search">Search</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/favorites">Favorites</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
