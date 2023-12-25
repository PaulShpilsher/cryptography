// AES Encryption
// The Advanced Encryption Standard (AES) algorithm is a symmetric-key (single key) block cipher developed by NIST in 2000-2001. 
// AES takes blocks of 128 bits as input and produces 128 bits blocks of ciphertext using keys of length 128 or 192 or 256 bits. 
// AES uses substitution and permutation with multiple rounds to convert plain text into cipher text. 
// For key lengths 128, 192 and 256 bits, AES has 10, 12 and 14 rounds respectively. 
// AES is a widely used Encryption algorithm and is recommended because of its security strength compared to DES and 3DES.

import { encrypt, decrypt } from "ethereum-cryptography/aes";
import {
  hexToBytes,
  utf8ToBytes,
  bytesToUtf8,
} from "ethereum-cryptography/utils";
import loremIpsum from "../lorem-ipsum.js";

const key = hexToBytes("2b7e151628aed2a6abf7158809cf4f3c");
const iv = hexToBytes("f0f1f2f3f4f5f6f7f8f9fafbfcfdfeff");

const contents = utf8ToBytes(loremIpsum);

const encrypted = await encrypt(contents, key, iv);

const decrypted = await decrypt(encrypted, key, iv);

const decryptedText = bytesToUtf8(decrypted);
const valid = loremIpsum === decryptedText;

console.log("Valid", valid);
