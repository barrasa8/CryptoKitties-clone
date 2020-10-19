const PandaContract = artifacts.require("PandaContract");
const PandaProxy = artifacts.require("PandaProxy");

module.exports = async function(deployer,networks,accounts) {
  let instanceOfLogic, instanceOfProxy, instance;

  // await deployer.deploy(PandaContract, { from: accounts[0] });
  // instanceOfLogic = await PandaContract.deployed();
  instanceOfLogic = await PandaContract.new();


  // await deployer.deploy(PandaProxy, instanceOfLogic.address, { from: accounts[0] });
  // instanceOfProxy = await PandaProxy.deployed();
  instanceOfProxy = await PandaProxy.new(instanceOfLogic.address);

  // //Create Proxy Dog to Fool Truffle
  instance = await PandaContract.at(instanceOfProxy.address);


//------------------------------------------------------------------------------  
//////////////////////////// TEST //////////////////////////////////////////////
//------------------------------------------------------------------------------
  // await instance.initialize();
  // let supply = await instance.totalSupply();
  // console.log("***\n TEST : supply at launched : " + supply.toString() + "\n***");

  let logicName= await instanceOfLogic.name();
  console.log("this is the name of the logic contract-->"+logicName);

  let name = await instance.name();
  console.log("This is the name of the Token---->"+name);
  let ret = await instance.createPandaGen0(1234567891234567);
  console.log(ret);
  
  // await instance.createKittyGen0(1111111111111111);
  // await instance.createKittyGen0(5555555555555555);
  // await instance.createKittyGen0(4444444444444444);
  // await instance.createKittyGen0(7777777777777777);
  // let result = await instance.getKittiesOf(accounts[0]);
  // supply = await instance.totalSupply();
  // console.log("***\n TEST : supply after 5 creations : " + supply.toString() + "\n***");
  // console.log("***\n TEST : list of token for acc0 after gen0 creation : " + result.toString() + "\n***");
};

