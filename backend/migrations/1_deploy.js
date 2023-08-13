const ethService = artifacts.require("ETHServices");
const karmaToken = artifacts.require("KarmaToken");


module.exports = async function (deployer) {
  await deployer.deploy(ethService);
  await deployer.deploy(karmaToken);
};
