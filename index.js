const { createPublicClient, http } = require('viem');
const { mainnet } = require('viem/chains');

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

async function checkNetwork() {
  const blockNumber = await publicClient.getBlockNumber();
  console.log('OPN automation active. Current Ethereum block:', blockNumber);
}

checkNetwork();
