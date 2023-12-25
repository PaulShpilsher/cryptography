import { sha256 } from 'ethereum-cryptography/sha256';
import { utf8ToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import loremIpsum from './lorem-ipsum.js';

const hash = sha256(utf8ToBytes(loremIpsum));

console.log(bytesToHex(hash));
