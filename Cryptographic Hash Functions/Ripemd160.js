//
// RIPEMD160
//
// RIPEMD160 is a secure cryptographic hash function which computes the hash of variable size input to a fixed size hash value of 160 bits. 
// RIPEMD-160 is the most widely used variant among all the members of the RIPEMD family.
// RIPEMD-160 is used in the Bitcoin address generation process and in the popular internet security program, Pretty Good Privacy (PGP). 

import { ripemd160 } from 'ethereum-cryptography/ripemd160';
import { utf8ToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import loremIpsum from '../lorem-ipsum.js';


const hash = ripemd160(utf8ToBytes(loremIpsum));

console.log(bytesToHex(hash));
