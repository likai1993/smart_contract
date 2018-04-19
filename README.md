# smart_contract
smart_contract demo 
Smartcontract Labs
===

Setup 
---

1. Install Ethereum on your local OS, and create your first node, you can refer to this tutorial: [Create Your Own Private Ethereum Blockchain](https://medium.com/mercuryprotocol/how-to-create-your-own-private-ethereum-blockchain-dad6af82fc9f).

2. Install truffle on your local OS, you can refer to this tutorial: [truffleframework](http://truffleframework.com/docs/getting_started/installation).

3. Once you have installed Ethreum and create an new account, you should enter the 'blockchain' directory and modify start1.sh.
```
--unlock "0x1b36989955ce535e53377ae94380298ee89bb310" you need to replace the account address to your just created account address.
```
4. Run `./start.sh` to start your ethreum private network and unlock your account to deploy the smart contract. 

5. cd client1 diretory, write your own smart contract and save it to contract/ directory, for smart contract tutorial you may refer to this: [solidity](https://ethereumbuilders.gitbooks.io/guide/content/en/solidity_tutorials.html).

6. Run `truffle compile` command to compile your smart contract

7. In build/contracts/ directory, you will find the all compiled smart contracts in json format. 

8. You may need to modify truffle.js to match networkid with your private ethereum network.

9. Modify migrations/2_deploy_contract.js.

10. Run `truffle migrate --network eth --reset` to deploy the smart contracts to 'eth' network, to be noted that 'eth' should match with truffle.js. 

11. Now you can run  `truffle console --network eth` to attach to your node and invoke the smart contract.

for example:
```        
        truffle(eth)> var ls = Kvstore.at(KVstore.address)
	truffle(eth)> ls.set("a","bb")
	truffle(eth)> KVstore.address
	'0x9e82bb4d24bb716a684977fdfe083b49a5cf99a2'
	truffle(eth)> ls.address
	'0x9e82bb4d24bb716a684977fdfe083b49a5cf99a2'
	truffle(eth)> ls.set("a","aa")
```
Labs
---

