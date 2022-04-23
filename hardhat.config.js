require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    kovan:{
      url:"https://opt-kovan.g.alchemy.com/v2/dHNJGur6Fv5ErrtriRBpXDGdmfTSUNol",
      accounts:['0xa62031205af76af4f7dee4cf1588cd810ac58c543beec9b208d2a5ca6fe0804a']
    }
  }
};
