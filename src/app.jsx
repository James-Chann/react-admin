import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from 'react-router-dom'

import Layout from 'component/layout/index.jsx'
// 页面
import Login from 'page/login/index.jsx'
import Home from 'page/home/index.jsx'
import UserList from 'page/userlist/index.jsx'
import Err from 'page/error/index.jsx'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => (
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user" component={UserList} />
                <Route component={Err} />
              </Switch>
            </Layout>
          )}
          />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
