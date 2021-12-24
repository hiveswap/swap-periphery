const HiveRouter = artifacts.require("HiveRouter");

module.exports = async function (deployer , network, accounts) {
  const factory = "0x29c3d087302e3fCb75F16175A09E4C39119459B2";
  const wmap = "0x13cb04d4a5dfb6398fc5ab005a6c84337256ee23";
  await deployer.deploy(HiveRouter, factory, wmap);
};
