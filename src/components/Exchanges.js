import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={24}>
          <Collapse >
            <Panel
              collapsible="disabled"
              key={'head'}
              showArrow={false}
              header={(
                <Row key={"exchange.id"}>
                  <Col span={6}>
                    <Text><strong>Exchanges</strong></Text>
                  </Col>
                  <Col span={6}><Text><strong>24h Trade Volume</strong></Text></Col>
                  <Col span={6}><Text><strong>Markets</strong></Text></Col>
                  <Col span={6}><Text><strong>Change</strong></Text></Col>
                </Row>
              )}
            />
          </Collapse>
        </Col>

      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                )}
              >
                {HTMLReactParser(exchange.description || 'No detail available!')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;