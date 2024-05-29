const hre = require("hardhat");

async function main() {
    
    // Fill arbiter and beneficiary address 
    const arbiter = "0x838022424e339deC8f4EF15886e360ccA5ad992A"
    const beneficiary = "0x1E34Fd4f6777e97b0F40aBd27200D8C1040A1d8C"

    const contract = await hre.ethers.deployContract("Escrow", [arbiter, beneficiary], {});

    await contract.deployed();

    console.log("Contract deployed to:", contract.address);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});