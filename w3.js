const Web3 = require("web3");
const fs = require("fs");
const abi = JSON.parse(fs.readFileSync("/var/www/server/hero.json"));

function queryHeroes(method, arg, abi)
{
    web3 = new Web3(new Web3.providers.HttpProvider('https://api.harmony.one'))
    hero_contract = new web3.eth.Contract(abi, '0x5f753dcdf9b1ad9aabc1346614d1f4746fd6ce5c')
    return hero_contract.methods[method](arg).call()
}

queryHeroes("getOwner", 6174, abi).then(response => console.info(response))