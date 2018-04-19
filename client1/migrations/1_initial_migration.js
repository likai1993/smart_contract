var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network, accounts) {
	if(network == "eth"){
  	deployer.deploy(Migrations);
	}
	else{
  	deployer.deploy(Migrations);
	}
};

