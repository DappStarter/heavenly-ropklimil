require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remind evil idea fork bottom surround'; 
let testAccounts = [
"0x517e9a2a358a08544b904dd160817e36e02a3119ed74532d678076f44ed3b1f3",
"0xbdcff5c4460e6f195e2acb192ebea9d5289a303f0f6770f075ca87b54f453202",
"0xc25bc90a18a9aad90f00dba4c13d89e19eb96396ec30ef704340151a79a50ab7",
"0x3a851619e38cc212a053ac3d5d9ba49beff54a30ea9edba703af6b6bda0aeb5b",
"0xce88c8dda7e374d1b7c6ea6a8ce877c5f9e2c1eddd6480d1563b343ed0f2235a",
"0xe4cb494ebec35677ac73f9a82ce5ea919eb76234665e9f1b0cf653683588c207",
"0x8429947d10a469910c5c97371c4dc273cf6e4caab5f706d25b690dd907dca7d5",
"0x4badb1ce6018e8d5cb7387a721bbb6f2730dc916605a7c0945724f5b8e9920cf",
"0xcff989e9bebd97f7f5a608092c1641739a5cee8dbe294d6c65014af34a5f6ea3",
"0x14e98647aaf78c6f17a24d6d7dc11c1cac84f343adbf884750ba53a79562d363"
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
            version: '^0.5.11'
        }
    }
};
