import React, { Component } from "react";
import PandaContract from "./contracts/PandaContract.json";
import PandaProxy from "./contracts/PandaProxy.json";
import PandaMarketPlaceContract from "./contracts/PandaMarketPlace.json";
import PandaMarketPlaceProxy from "./contracts/PandaMarketPlaceProxy.json";

import getWeb3 from "./getWeb3";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import {BrowserRouter as Router} from 'react-router-dom';

import "./App.css";



class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    marketContract:null,
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = PandaProxy.networks[networkId];
      const instance = new web3.eth.Contract(
        PandaContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      const marketDeployedNetwork = PandaMarketPlaceProxy.networks[networkId];
      const marketInstance = new web3.eth.Contract(
        PandaMarketPlaceContract.abi,
        marketDeployedNetwork && marketDeployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance , marketContract: marketInstance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <div className="App">
          <h1>{this.state.accounts[0]}</h1>
          <Header/>
          <Body contract ={this.state.contract} accounts={this.state.accounts} marketContract = {this.state.marketContract} web3 = {this.state.web3}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
