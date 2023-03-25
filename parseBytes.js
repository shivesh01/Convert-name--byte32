//converts proposal name into 32bytes
const ethers = require('ethers');

async function parseBytes(args){
    const bytes = args[0];
    const name = ethers.utils.parseBytes32String(bytes);
    console.log("name: ",name);

}
// take arguments from commandline
parseBytes(process.argv.slice(2));