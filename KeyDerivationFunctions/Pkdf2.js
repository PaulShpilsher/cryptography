/**
 * PBKDF2
 *
 * Password Based Key Derivation Function 2 (PBKDF2) is a type of KDF which is resistant to dictionary and rainbow table attacks.
 * In essence, PBKDF2 takes several input parameters and produces a secret key with desired length as output.
 * For generating secret keys pbkdf2 submodule of  Ethereum-Cryptography library exposes following function:
 * @see  function pbkdf2(password: Uint8Array, salt: Uint8Array, iterations: number, keylen: number, digest: string): Promise<Uint8Array>;
 */

import { pbkdf2 } from "ethereum-cryptography/pbkdf2";
import { utf8ToBytes, bytesToHex } from "ethereum-cryptography/utils";
import loremIpsum from "../lorem-ipsum.js";

const password = loremIpsum;
const salt = "salty";
const iterations = 999;
const keylen = 32;
const digest = "sha256";

const hash = await pbkdf2(
  utf8ToBytes(password),
  utf8ToBytes(salt),
  iterations,
  keylen,
  digest
);

console.log(bytesToHex(hash));
