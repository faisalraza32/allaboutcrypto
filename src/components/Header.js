import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Space, Typography, Avatar } from 'antd';

import icon from '../static/images/cryptocurrency.png';

const { Header } = Layout;

class HeaderBar extends React.Component {

  render() {
    return (
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
        <div className="logo-container">
          <Typography.Title level={2} className="logo" style={{ whiteSpace: 'nowrap' }}>
            <Avatar src={icon} size="large" />  <Space />
            <Link to="/">All About Crypto</Link>
          </Typography.Title>
        </div>
      </Header>
    );
  }
}
export default HeaderBar;
