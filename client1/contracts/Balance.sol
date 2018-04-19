contract Ownerbalance {

    address owner;

    function ownerbalancereturner() public {
        owner = msg.sender; 
    }

    function getOwnerBalance() constant returns (uint) {
        return owner.balance;
    }
}
