const { assert } = require("chai");

const Meoww = artifacts.require("./Meoww");

// check for chai
require("chai").use(require("chai-as-promised")).should();

contract("Meoww", (accounts) => {
  let contract;
  // before tells our tests to run this first before anything else
  before(async () => {
    contract = await Meoww.deployed();
  });

  // testing container - describe

  describe("deployment", () => {
    // test samples with writing it
    it("deploys successfuly", async () => {
      const address = contract.address;
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
      assert.notEqual(address, 0x0);
    });
    it("has a name", async () => {
      const name = await contract.name();
      assert.equal(name, "Meoww");
    });
    it("has a symbol", async () => {
      const symbol = await contract.symbol();
      assert.equal(symbol, "MEW");
    });
  });

  describe("minting", () => {
    it("creates a new token", async () => {
      const result = await contract.mint(
        "0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b",
        "https...1"
      );
      const totalSupply = await contract.totalSupply();
      //Success
      assert.equal(totalSupply, 1);
      const event = result.logs[0].args;
      assert.equal(
        event._from,
        "0x0000000000000000000000000000000000000000",
        "from the contract"
      );
      assert.equal(event._to, accounts[0], "to is msg.sender");

      //Failure
      await contract.mint(
        "0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b",
        "https...1"
      ).should.be.rejected;
    });
  });

  describe("indexing", () => {
    it("lists Meowwz", async () => {
      // Mint three new tokens
      await contract.mint(
        "0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b",
        "https...2"
      );
      await contract.mint(
        "0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b",
        "https...3"
      );
      await contract.mint(
        "0x86948078a2bC9A367DE4c1E24E9E8573f09cF20b",
        "https...4"
      );
      const totalSupply = await contract.totalSupply();
      // Loop through list and grab KBirdz from list
      let result = [];
      let Meowwz;
      for (let i = 1; i <= totalSupply; i++) {
        Meowwz = await contract.meowwz(i - 1);
        result.push(Meowwz);
      }
    });
  });
});
