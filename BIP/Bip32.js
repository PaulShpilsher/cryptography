/**
 * BIP 32
 * Bitcoin Improvement Proposal 32 (BIP32) is a wallet standard that describes how to derive private and public keys of a wallet
 * from a binary master seed (m) and an ordered set of indices.
 */

import { HDKey } from "ethereum-cryptography/hdkey";
import { hexToBytes, bytesToHex } from "ethereum-cryptography/utils";

const seed = hexToBytes(
  "aba95e0851419e1e67a4d9c47017ce85117115fe0c0dc266f6f000d44e1d7f8c0618df2e127f51538ef62d389c1ffa4ee0b02ba9d9efc376606b37095299a20d"
);

// Given Master seed: generating first and second normal grand-grandchild private keys of master private key
// and corresponding public keys as well and finally displaying them on console.

const hdkey = HDKey.fromMasterSeed(seed);

console.log(bytesToHex(hdkey.derive("m/0/0/0").privateKey));

console.log(bytesToHex(hdkey.derive("m/0/0/0").publicKey));

console.log(bytesToHex(hdkey.derive("m/0/0/1").privateKey));

console.log(bytesToHex(hdkey.derive("m/0/0/1").publicKey));

// Given Message hash and HD key perform signing verification and displaying verification result on console.

const messageHash =
  "e25bb8f8f0d1598b5f25853f92813cbae8fcab2848c3135e244e796ccfc7edd8";

const sig = hdkey.sign(hexToBytes(messageHash));

console.log(hdkey.verify(hexToBytes(messageHash), sig));
