import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderDiv from './Header';
import { Layout, Menu, Space, Typography } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined
} from '@ant-design/icons';


const { Header, Sider, Content, Footer } = Layout;

const Layouts = ({ active, classname, children }) => {
    const [collapsed, setCollapsed] = useState(true)
    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className={`${classname}`} >
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ background: '#fff' }}
                className="sidebar-left"
            >
                <div className="logo" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={[active]}>
                    <Menu.Item key='home'>
                        <Link to="/">
                            <HomeOutlined />
                            <span> Home </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='cryptocurrencies'>
                        <Link to="/currencies">
                            <MoneyCollectOutlined />
                            <span> Crypto Currencies </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='exchanges'>
                        <Link to="/exchanges">
                            <BulbOutlined />
                            <span> Exchanges </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='news'>
                        <Link to="/news">
                            <FundOutlined />
                            <span> News </span>
                        </Link>

                    </Menu.Item>
                </Menu>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
            </Sider>
            <Layout>
                <Header className="headerTop">
                    <HeaderDiv />
                </Header>
                <Content
                    style={{
                        padding: 16,
                        minHeight: '100vh',
                    }}
                    className={collapsed ? "collapsed mainContnet " : "mainContnet"}
                >
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <div className="footer">
                        <Typography.Title level={5} style={{ color: 'black', textAlign: 'center' }}>
                            Cryptonews <br />
                            All right reserved
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/currencies">Crypto Currencies</Link>
                            <Link to="/exchanges">Exchanges</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
}
export default Layouts;