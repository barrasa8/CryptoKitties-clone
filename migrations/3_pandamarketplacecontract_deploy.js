const PandaContract = artifacts.require("PandaContract");
const PandaProxy = artifacts.require("PandaProxy");
const PandaMarketPlaceContract = artifacts.require("PandaMarketPlace");
const PandaMarketPlaceProxy = artifacts.require("PandaProxy");

module.exports = async function(deployer) {
  let instanceOfLogic, instanceOfProxy, instance;
  // deployer.then(async () => {
  //   await deployer.deploy(PandaMarketPlaceContract, PandaProxy.address);
  //   instanceOfLogic =  await PandaMarketPlaceContract.deployed();
  //   await instanceOfLogic.initialize(PandaProxy.deployed);
  //   //await deployer.deploy(PandaMarketPlaceProxy,PandaMarketPlaceContract.address,PandaProxy.address);
  // });
  // console.log("market place contract addr --> ", instanceOfLogic);
  

  instanceOfLogic = await PandaMarketPlaceContract.new();

  

  // instanceOfProxy = await PandaMarketPlaceProxy.new(instanceOfLogic.address);

  // instance = await PandaMarketPlaceContract.at(instanceOfProxy.address);

  // console.log("contract --> ", instanceOfLogic.address);

  // console.log("proxy --> ", instanceOfProxy.address);
};