// SHA256
// SHA(Secure Hashing Algorithm)-256 is a variant of SHA-2 developed by the National Security Agency in 2001. 
// SHA256 takes arbitrary size message/data as input and produces a hash value of 256 bits. 
// SHA256 is used by some of the most popular authentication protocols like Secure Sockets Layer (SSL), Transport Layer Security (TLS),  
// Secure Shell (SSH) and many more. 
// Regarding Blockchain specifically, cryptocurrencies, like Bitcoin, use SHA256 for verifying transactions. 
// It is also an integral part of Bitcoin’s Proof of Work consensus mechanism.

import { sha256 } from 'ethereum-cryptography/sha256';
import { utf8ToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import loremIpsum from '../lorem-ipsum.js';

const hash = sha256(utf8ToBytes(loremIpsum));

console.log(bytesToHex(hash));
