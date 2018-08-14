import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MerchantList = ({ merchants }) => (
  <div>
    {merchants.map(merchant => (
      <div key={merchant.id}>
        {merchant.firstname} {merchant.lastname}
        <img src={merchant.avatarUrl} alt={merchant.firstname} />
        <div>
          {merchant.email}
        </div>
        <div>
          {merchant.phone}
        </div>
        <div>
          {merchant.hasPremium}
        </div>
      </div>
    ))}
    <Link to="/merchants/new">
      Create new Merchant
    </Link>
  </div>
);

MerchantList.propTypes = {
  merchants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    hasPremium: PropTypes.bool.isRequired,
    bids: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      carTitle: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      created: PropTypes.string.isRequired
    })).isRequired
  })).isRequired
};

export default MerchantList;
