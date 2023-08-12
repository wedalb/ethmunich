const ethService = artifacts.require("ETHServices");

module.exports = async function (deployer) {
  await deployer.deploy(ethService);
};
