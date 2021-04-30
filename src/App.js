import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SearchView from "./views/SearchView";
import FavoritesView from "./views/FavoritesView";
import ProfileView from "./views/ProfileView";

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
          <div className="ContentContainer">
            <Switch>
              <Route path="/search">
                <SearchView />
              </Route>
              <Route path="/favorites">
                <FavoritesView />
              </Route>
              <Route path="/profile">
                <ProfileView />
              </Route>
            </Switch>
          </div>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
