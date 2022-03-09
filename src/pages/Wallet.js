import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <Form />
        <Table />
      </>
    );
  }
}

export default Wallet;
