const PandaContract = artifacts.require("PandaContract");

module.exports = function(deployer) {
  deployer.deploy(PandaContract);
};
