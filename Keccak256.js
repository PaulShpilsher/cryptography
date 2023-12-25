/**
 * keccak-256
 * keccak256 is a cryptographic hashing  algorithm from SHA-3 family. 
 * It computes the hash of variable size input to a fixed size hash value of 256 bits. 
 * In essence, keccak256 which is used in Ethereum Blockchain, is a variant of sha3-256 with  some constants changed in the code. 
 */
import { keccak256 } from 'ethereum-cryptography/keccak';
import { utf8ToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import loremIpsum from './lorem-ipsum.js';


const hash = keccak256(utf8ToBytes(loremIpsum));

console.log(bytesToHex(hash));
