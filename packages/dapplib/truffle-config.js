require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski story cost soap around imitate prize equal genius'; 
let testAccounts = [
"0xdd046e0f5f98a6ed027a2a3a2ee9d891d41d169cd5df582c692dc893b3324a46",
"0x4a0563667f5f9a0eec5bf909eaa0744774a0169fb058f2c3b390426b687b7a4d",
"0x5eb98f709805cf0fe274adbd410744981abdf93485aed02a3edb1258c713225c",
"0xf97bbb32648d8a200fe696f2c4b9a555c5965261ac49387448e8f8209e13e31f",
"0x34f5a8104d9fb23bc473d49d75564b0e45bd3df4e5f8696e93d641a219388680",
"0x1f205729dafd98e7ee1f25a03253e9eca02c227ea2ce718679182706f6b919e6",
"0xfb5d0365b47b8b437ca5044374f1581c78c7e8097f3dde455ee6e9e3ea895b35",
"0x09d68d39816e17f877b8f7b49350302ab3974ee792a40fd3b136a77d95e6cc93",
"0xa9c3b46a81cbef143f991dc918aafafa27aea5525f743d522a0d5bcd84d92d37",
"0x7714742a546d9d5ab0745f142ecda2a55fc94312949430f2b69108ca768df9f5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

