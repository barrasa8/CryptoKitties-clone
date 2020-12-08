const PandaContract = artifacts.require("PandaContract");
const PandaProxy = artifacts.require("PandaProxy");
const PandaMarketPlaceContract = artifacts.require("PandaMarketPlace");
const PandaMarketPlaceProxy = artifacts.require("PandaMarketPlaceProxy");

module.exports = async function(deployer) {
  let instanceOfLogic, instanceOfProxy, instance;

  await deployer.deploy(PandaMarketPlaceContract);
  instanceOfLogic = await PandaMarketPlaceContract.deployed();
  
  // console.log("instnace of logic--> ",instanceOfLogic);

  // console.log("contract--> ",PandaMarketPlaceContract);

  // console.log("isntance of logic",instanceOfLogic);

  await deployer.deploy(PandaMarketPlaceProxy,instanceOfLogic.address);
  instanceOfProxy =  await PandaMarketPlaceProxy.deployed();

  
  instance = await PandaMarketPlaceContract.at(instanceOfProxy.address);
  console.log("instnace")
   instance.initialize(PandaProxy.address);

  console.log("success proxy deployment");





  

  // instanceOfProxy = await PandaMarketPlaceProxy.new(instanceOfLogic.address);

  // instance = await PandaMarketPlaceContract.at(instanceOfProxy.address);

  // console.log("contract --> ", instanceOfLogic.address);

  // console.log("proxy --> ", instanceOfProxy.address);
};