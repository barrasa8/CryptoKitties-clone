const PandaContract = artifacts.require("PandaContract");
const PandaProxy = artifacts.require("PandaProxy");
const PandaMarketPlaceContract = artifacts.require("PandaMarketPlace");
const PandaMarketPlaceProxy = artifacts.require("PandaMarketPlaceProxy");

module.exports = async function(deployer, networks, accounts) {
  let instanceOfLogic, instanceOfProxy, instance;

  await deployer.deploy(PandaMarketPlaceContract);
  instanceOfLogic = await PandaMarketPlaceContract.deployed();
  
  // console.log("OWNER OF instnace of logic--> ",instanceOfLogic.owner);

  await deployer.deploy(PandaMarketPlaceProxy,instanceOfLogic.address);
  instanceOfProxy =  await PandaMarketPlaceProxy.deployed();

  
  marketInstance = await PandaMarketPlaceContract.at(instanceOfProxy.address);
  // console.log("instnace")
  marketInstance.initialize(PandaProxy.address);

  // console.log("success proxy deployment");


  // // ************************************************************************
  // // tests : COMMENT THIS SECTION TO RUN TRUFFLE TESTS / UNCOMMENT TO TEST AT MIGRATION
  // // ************************************************************************
  //   //************************************************************************  //************************************************************************
  //   //MEMO // let instanceOfPandaProxy = await PandaProxy.deployed();
  //   //MEMO // let instanceOfPandaUsed = await PandaToken.at(PandaProxy.address);
  //   //MEMO instanceOfPandaUsed.address == instanceOfPandaProxy.address == PandaProxy.address
  //   //MEMO instanceOfFactory.address == RentalFactory.address // idem market.addres s== PandaMarketProxy.address

  let Panda = await PandaContract.at(PandaProxy.address);
  await Panda.setApprovalForAll(marketInstance.address, true, {from: accounts[0]});
  console.log("***\n TEST f/setApproval : set market as approved operator for account 0 \n***");

  let result = await Panda.ownerOf(1);
  console.log("this is the owner addr. of the token 1--> ",result);
  
  let approvedAddr = await Panda. getApproved(1);
  console.log("address approved to token 1 ",approvedAddr)

  let isApproved =  await Panda.isApprovedForAll(marketInstance.address,accounts[0]);
  console.log(Panda.address,accounts[0],isApproved);
  //await marketInstance.setOffer(2000000, 0, {from: accounts[0]});
  // await marketInstance.setOffer(2000000, 2, {from: accounts[0]});
  // await marketInstance.setOffer(2000000, 3, {from: accounts[0]});
  // await marketInstance.setOffer(2000000, 5, {from: accounts[0]});
  // let tokensOnSale = await marketInstance.getAllTokenOnSale();
  // console.log("***\n TEST\n" +
  //  " f/setOffer : 4 offers from account 0 for tokens 1, 2, 3, 5 at 2000000" +
  //  "\n f/getAllTokenOnSale : result : " + tokensOnSale.toString() + "\n***");

  
};