const Meoww = artifacts.require("Meoww");

module.exports = async function (deployer) {
  await deployer.deploy(Meoww);
};
