const events = await contract.queryFilter("finalEvent", 0, "latest");

for(let i = 0; i < events.length; i++) {
    const transaction = await provider.getTransaction(events[i].transactionHash);
    const traceTransaction = await provider.send('debug_traceTransaction', [ events[i].transactionHash, {"tracer": "callTracer"} ])
    console.log(traceTransaction)
    console.log(transaction);
    console.log(`Sender (msg.sender): ${transaction.from}`);
}