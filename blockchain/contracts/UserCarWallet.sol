// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

interface TokenInterface {
    function mint(address account, uint256 amount) external;
}

contract UserCarWallet {
    AggregatorV3Interface internal tokenPriceFeed;
    TokenInterface public tokenInterface;
    uint256 public tokenPrice = 73000000; //1 token = 73.0000000 usd, with 6 decimal places
    address public tokenAddress;
    uint256 public tokenBalance;

    address public owner;
    address private manager;

    string public uri;

    event BuyToken(address indexed buyer, uint256 amount);

    constructor(
        address _tokenAddress,
        address _managerAddress,
        string memory _uri
    ) {
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

    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }

    function getLatestTokenPrice() public view returns (int) {
        (, int price, , , ) = tokenPriceFeed.latestRoundData();
        return price;
    }

    function tokenAmount(uint256 amountBTGDol) public view returns (uint256) {
        uint256 btgDol = uint256(getLatestTokenPrice()); //with 6 decimal places
        uint256 amountUSD = (amountBTGDol * btgDol) / 1000000; //with 6 decimal places
        uint256 amountToken = (amountUSD * 100) / tokenPrice; //with 6 decimal places
        return amountToken;
    }

    receive() external payable {
        uint256 amountToken = tokenAmount(msg.value);

        require(amountToken <= tokenBalance, "Not enough tokens in contract");

        tokenInterface.mint(msg.sender, amountToken);
        tokenBalance -= amountToken;

        emit BuyToken(msg.sender, amountToken);
    }

    function addTokens(uint256 amount) public onlyManager {
        tokenBalance += amount;
    }

    function getURI() public view returns (string memory) {
        return uri;
    }
}
