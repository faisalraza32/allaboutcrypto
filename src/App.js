import React from 'react';
import { Provider } from 'react-redux';
import { Card, Row, Col } from 'antd';
import store from './app/store';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import LayoutPage from './pages/layoutpage';

const NoMatchPage = () => {
  return (
    <Row style={{ marginTop: '20%' }}>
      <Col xs={{ span: 12, offset: 6 }}>
        <Card>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Page not found</h2>
              <Link to="/">back to home</Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};


const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <LayoutPage page="home" />
            </Route>
            <Route exact path="/exchanges">
              <LayoutPage page="exchanges" />
            </Route>
            <Route exact path="/currencies">
              <LayoutPage page="currencies" />
            </Route>
            <Route exact path="/currencies/:coinId">
              <LayoutPage page="currencydetail" />
            </Route>
            <Route exact path="/news" >
              <LayoutPage page="news" />
            </Route>
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </Provider>
      </Router>
    </React.StrictMode >
  );;
}

export default App;
