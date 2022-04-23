const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Democrazy", function () {
  let tokenContract;
  before(async function(){
    const ContractFactory = await ethers.getContractFactory("Democrazy");
    tokenContract = await ContractFactory.deploy();
    await tokenContract.deployed();
    console.log(tokenContract);

  });

  it("Should create and mint 1k DCR", async function () {
    const [owner] = await ethers.getSigners();
    console.log(owner)
    const ownerBalance = await tokenContract.balanceOf(await owner.getAddress());
    console.log(ownerBalance);
    expect(ownerBalance).to.equal(ethers.utils.parseEther('1000'))
/**
 *  expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
 */
   
  });

  it("Should transfer .4K and leave the other  account with .4K and .6K in s0 ", async function () {
    const [owner, other] = await ethers.getSigners();
    let tx = await tokenContract.transfer(await other.getAddress(), ethers.utils.parseEther("400"));
    await tx.wait();
    const ownerBalance = await tokenContract.balanceOf(await owner.getAddress());
    expect(ownerBalance).to.equal(ethers.utils.parseEther('600'));
    const otherBalance = await tokenContract.balanceOf(await other.getAddress());
    expect(otherBalance).to.equal(ethers.utils.parseEther('400'));




   
  });
});
