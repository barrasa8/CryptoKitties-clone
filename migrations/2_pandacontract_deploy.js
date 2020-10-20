const PandaContract = artifacts.require("PandaContract");
const PandaProxy = artifacts.require("PandaProxy");

module.exports = async function(deployer,networks,accounts) {
  let instanceOfLogic, instanceOfProxy, instance;

  instanceOfLogic = await PandaContract.new();

  instanceOfProxy = await PandaProxy.new(instanceOfLogic.address);

  instance = await PandaContract.at(instanceOfProxy.address);

//------------------------------------------------------------------------------  
//////////////////////////// TEST //////////////////////////////////////////////
//------------------------------------------------------------------------------

  // let logicName= await instanceOfLogic.name();
  // console.log("this is the name of the logic contract-->"+logicName);

  // let name = await instance.name();
  // console.log("This is the name of the Token---->"+name);
  
  // let totalSupply = await instance.totalSupply();
  // console.log("TotalSupply is --> "+totalSupply)
  
  // let ret = await instance.createPandaGen0(1234567891234567);
  // console.log(ret);
   
  // let totalSupply2 = await instance.totalSupply();
  // console.log("TotalSupply is after createPandaGen0 --> "+totalSupply2)
  
  // await instance.createPandaGen0(1111111111111111);
  // await instance.createPandaGen0(5555555555555555);
  // await instance.createPandaGen0(4444444444444444);
  // await instance.createPandaGen0(7777777777777777);
  
  // let result = await instance._pandasOfOwner(accounts[0]);
  
  // supply = await instance.totalSupply();
  // console.log("***\n TEST : supply after 5 creations : " + supply.toString() + "\n***");
  // console.log("***\n TEST : list of token for acc0 after gen0 creation : " + result.toString() + "\n***");
};

