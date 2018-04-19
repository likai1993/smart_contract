var KVstore = artifacts.require("./KVstore.sol");
var Ownbalance = artifacts.require("./Ownerbalance.sol");
module.exports = function(deployer, network, accounts){
	if(network == "eth"){
		deployer.deploy(Ownbalance, {
			gas: 2925889,
			from: "0x3f5e1f3430f833e5214df3b005861e18d024b8a1" 
					
	});
	}
	else{ // ganache-cli
		deployer.deploy(KVstore, {
			gas: 10000000
		});
	}
}
