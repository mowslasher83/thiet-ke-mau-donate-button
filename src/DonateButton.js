import React from 'react';
import PropTypes from 'prop-types';
import './DonateButton.css';

const DonateButton = ({ amount, onClick }) => {
  return (
    <button className='donate-button' onClick={onClick}>
      Đóng góp {amount} VNĐ
    </button>
  );
};

DonateButton.propTypes = {
  amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DonateButton;