import hre, { ethers, network } from 'hardhat';
import { Giorgi__factory } from '../typechain';

describe.only("Binary search", function () {

    it("here", async () => {
        // ether

        if(process.env.blax) {
            console.log("oe");
        } else{
            console.log("ae");
        }
        
        // console.log(ethers.utils.toUtf8String(
        //     ethers.utils.arrayify("0x697066733a2f2f516d4e6357616a506367596f7641466d61437041374e534a794a4454695062516b4d446d364d74325963466a3442")
        // ), ' hahaha')

        // const signers = await ethers.getSigners();
        // const f = new Giorgi__factory(signers[0]);
        // const c = await f.deploy();

        // for(let i = 0; i < 1; i++) {
        //     await c.add()
        //     console.log("done: ", i)
        // }

        // console.log(await c.start())

        // // console.log((await c.vote(1, 50000))[0].toString())
        // // console.log((await c.vote(100, 70000))[0].toString())
        // // console.log((await c.vote(2400, 95817))[0].toString())
        // // console.log((await c.vote(5000, 450000))[0].toString())

        // let tx1 = await c.vote(4, 45)
        // let tx2 = await c.vote(10, 4885)
        // let tx3 = await c.vote(15, 3500)
        // let tx4 = await c.vote(584, 2000);

        // console.log("way 1");
        // console.log("gasUsed: ", tx1[0].toString(), "lower: ", tx1[1].toString(), "upper: ", tx1[2].toString());
        // console.log("gasUsed: ", tx2[0].toString(), "lower: ", tx2[1].toString(), "upper: ", tx2[2].toString());
        // console.log("gasUsed: ", tx3[0].toString(), "lower: ", tx3[1].toString(), "upper: ", tx3[2].toString());
        // console.log("gasUsed: ", tx4[0].toString(), "lower: ", tx4[1].toString(), "upper: ", tx4[2].toString());

        // let tx5 = await c.vote2(1, 45)
        // let tx6 = await c.vote2(10, 4885)
        // let tx7 = await c.vote2(15, 3500)
        // let tx8 = await c.vote2(584, 2000);

        // console.log("way 2");
        // console.log("gasUsed: ", tx5[0].toString(), "final: ", tx5[1].toString())
        // console.log("gasUsed: ", tx6[0].toString(), "final: ", tx6[1].toString())
        // console.log("gasUsed: ", tx7[0].toString(), "final: ", tx7[1].toString())
        // console.log("gasUsed: ", tx8[0].toString(), "final: ", tx8[1].toString())

        // // console.log("twoWay gas")
        // // console.log((await c.vote(1, 8))[0].toString())


        // Import Ethers.js

        // Replace with your provider (e.g., Alchemy, Infura, or a local Ethereum node)
        // const PROVIDER_URL = "https://eth-sepolia.g.alchemy.com/v2/mg30IxlrcylGVkEcxvDOn6CXLbZx_n01"; // Replace with your Infura project ID
        // const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);

        // const CONTRACT_ADDRESS = "0xYourContractAddress";
        // const CONTRACT_ABI = [
        //     "event finalEvent(address)"
        // ];

        // // Create a contract instance
        // const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

        // // Function to listen for the event and fetch the sender
        // console.log("Listening for finalEvent events...");

        // // Listen for the ProposalExecuted event
        // contract.on("finalEvent", async (proposalId, event) => {
        //     console.log(`Transaction Hash: ${event.transactionHash}`);

        //     // Fetch transaction details using the transaction hash
        //     const transaction = await provider.getTransaction(event.transactionHash);
            
        //     console.log(transaction);

        //     // Log the sender (msg.sender)
        //     console.log(`Sender (msg.sender): ${transaction.from}`);
        // });
    })
  
})