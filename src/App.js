import React from 'react';
import { DonateButton } from './DonateButton';

function App() {
  const handleDonate = () => {
    alert('Cảm ơn bạn đã đóng góp!');
  };

  return (
    <div>
      <h1>Chào mừng đến với trang web của tôi</h1>
      <DonateButton amount={10} onClick={handleDonate} />
    </div>
  );
}

export default App;