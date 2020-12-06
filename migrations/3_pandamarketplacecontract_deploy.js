const PandaContract = artifacts.require("PandaContract");
const PandaProxy = artifacts.require("PandaProxy");
const PandaMarketPlaceContract = artifacts.require("PandaMarketPlace");
const PandaMarketPlaceProxy = artifacts.require("PandaProxy");

module.exports = function(deployer) {
  let instanceOfLogic, instanceOfProxy;
  deployer.then(async () => {
    await deployer.deploy(PandaMarketPlaceContract, PandaProxy.address);
    instanceOfLogic =  await PandaMarketPlaceContract.deployed();
    //await deployer.deploy(PandaMarketPlaceProxy,PandaMarketPlaceContract.address,PandaProxy.address);
  });
  console.log("market place contract addr --> ", instanceOfLogic);

};