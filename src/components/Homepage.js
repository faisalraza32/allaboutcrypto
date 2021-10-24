import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log("Home", isFetching, data);
  if (isFetching) return <Loader />;
  const globalStatus = data?.data?.stats;

  return (
    <>
      <Title level={2} className="heading">Global Crypt Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStatus.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStatus.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStatus.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStatus.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStatus.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/currencies">More...</Link></Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">More...</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage;
