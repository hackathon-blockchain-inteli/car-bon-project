// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

interface TokenInterface {
    function mint(address account, uint256 amount) external;

    function balanceOf(address account) external view returns (uint256);
}

contract UserCarContract {
    AggregatorV3Interface internal tokenPriceFeed;
    TokenInterface public tokenInterface;
    uint256 public tokenPrice = 7300; //1 token = 73.00 usd, with 2 decimal places
    address public tokenAddress;
    uint256 public tokenBalance;

    address public owner;
    address private manager;

	String public uri;

    event BuyToken(address indexed buyer, uint256 amount);

    constructor(address _tokenAddress, address _managerAddress, String memory _uri) {
        tokenAddress = _tokenAddress;
        tokenInterface = TokenInterface(tokenAddress);
        tokenPriceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306 // BTG DOL/USD
        );
        owner = msg.sender;
        manager = _managerAddress;
		uri = _uri;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function getLatestTokenPrice() public view returns (int) {
        (, int price, , , ) = tokenPriceFeed.latestRoundData();
        return price;
    }

    function tokenAmount(uint256 amountBTGDol) public view returns (uint256) {
        uint256 btgDol = uint256(getLatestTokenPrice()); //with 6 decimal places
        uint256 amountUSD = (amountBTGDol * btgDol) / 10 ** 6; // calculate amount in USD of BTG DOL
        uint256 amountToken = (amountUSD * 10 ** 2) / tokenPrice; // calculate amount in token with 2 decimal places
        return amountToken; // return amount in token with 2 decimal places
    }

    receive() external payable {
        uint256 amountToken = tokenAmount(msg.value);

        require(amountToken <= tokenBalance, "Not enough tokens in contract");

        tokenInterface.mint(msg.sender, amountToken);
        tokenBalance -= amountToken;

        emit BuyToken(msg.sender, amountToken);
    }

	function
}
