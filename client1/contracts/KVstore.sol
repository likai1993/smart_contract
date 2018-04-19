pragma solidity ^0.4.0;

contract KVstore {
	mapping(string=>string) store;
 
	function get(string key) public view returns(string) {
		return store[key];
	}
 
	function set(string key, string value) public{
    store[key] = value;
  }
}
