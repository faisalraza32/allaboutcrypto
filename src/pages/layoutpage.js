import * as React from 'react';
import Layouts from '../components/Layouts';
import { Homepage, Cryptocurrencies, CryptoDetails, Exchanges, News } from '../components';

const getPage = (page) => {
  switch (page) {
    case 'home':
      return <Homepage />;
    case 'currencies':
      return <Cryptocurrencies />;
    case 'currencydetail':
      return <CryptoDetails />;
    case 'exchanges':
      return <Exchanges />;
    case 'news':
      return <News />;
    default:
      return null;
  }
}
const LayoutPage = ({ page }) => {
  return (
    <Layouts title={page} classname="dashboard">
      {getPage(page)}
    </Layouts>
  );
}

export default LayoutPage;
