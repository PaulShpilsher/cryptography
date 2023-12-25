// BLAKE2b
// BLAKE2b is a member of the BLAKE2 family of cryptographic hash functions which is an improved version 
// of the SHA-3 NIST competition finalist BLAKE. 
// BLAKE2b is a highly secure and fast cryptographic hash function which accepts variable size input and produces a hash value of 512-bits.. 

import { blake2b } from 'ethereum-cryptography/blake2b';
import { utf8ToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import loremIpsum from './lorem-ipsum.js';


const hash = blake2b(utf8ToBytes(loremIpsum));

console.log(bytesToHex(hash));
