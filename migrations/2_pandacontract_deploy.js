const PandaContract = artifacts.require("PandaContract");

module.exports = async function(deployer) {
  const contract = await deployer.deploy(PandaContract);
};

