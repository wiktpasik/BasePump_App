require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.27", // lub jaka jest w repo
  networks: {
    baseSepolia: {
      url: "https://base-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 84532,
    },
    base: {
      url: "https://base-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 8453,
    },
  },
};