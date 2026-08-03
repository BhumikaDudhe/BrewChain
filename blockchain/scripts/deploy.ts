import { network } from "hardhat";

async function main() {
  console.log("Deploying TipJar...");

  const { ethers } = await network.connect();

  const tipJar = await ethers.deployContract("TipJar");

  await tipJar.waitForDeployment();

  console.log("--------------------------------");
  console.log("✅ TipJar deployed!");
  console.log(await tipJar.getAddress());
  console.log("--------------------------------");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});