var Migrations = artifacts.require("./UserContract.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
};