const fs = require("fs");

const Chip = artifacts.require("Chip");
const Fish = artifacts.require("Fish");
const Mpea = artifacts.require("Mpea");
const FishRewardPool = artifacts.require("FishRewardPool");
const Boardroom = artifacts.require("Boardroom");
const ChipSwapMechanism = artifacts.require("ChipSwapMechanism");
const Oracle = artifacts.require("Oracle");
const Treasury = artifacts.require("Treasury");
const TokenMigration = artifacts.require("TokenMigration");

// const chipAddress = "0xedDD4bB8Fa49A815bb0B7F15875117308393d76b";
// const fishAddress = "0xbAA0eE13b1371a0Ce9B631AB06A2BFBB4B667bE8";

const chipStartBlock = 8009960;
const fishStartBlock = 11104659;
const chipAddress = '0xb051a24b1a325008B817595B2E23915AFfF5a4a2';
const fishAddress = '0x4170E5AC7f25Df7c21937D476ad1002891550b0B';
const mpeaAddress = '0xe57508ab678440cd4d87effc523AF6e348a97202';

const migrationEndTime = 	1727835354;

module.exports = function(deployer) {

  // deployer.deploy(TokenMigration, chipAddress, fishAddress, migrationEndTime).then(() => {
  //   console.log('TokenMigration Address: ',TokenMigration.address);
  // });

  // deployer.deploy(Treasury).then(()=> {
  //   console.log('Treasury Address: ',Treasury.address);
  // })
  //
  // deployer.deploy(Boardroom).then(()=> {
  //   console.log('Boardroom Address: ',Boardroom.address);
  // })
  //
  // deployer.deploy(Oracle).then(()=> {
  //   console.log('Oracle Address: ',Oracle.address);
  // })

  // deployer.deploy(ChipSwapMechanism, chipAddress, fishAddress).then(()=> {
  //   console.log('ChipSwapMechanism Address: ',ChipSwapMechanism.address);
  // })
deployer.deploy();
};
