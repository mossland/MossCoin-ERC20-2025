import { expect } from "chai";
import { ethers } from "hardhat";

describe("MossCoin", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("MossCoin");

    const recipient = (await ethers.getSigners())[0].address;

    const instance = await ContractFactory.deploy(recipient);
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("MossCoin");
  });
});
