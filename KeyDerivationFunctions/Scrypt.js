/**
 * Scrypt
 * Scrypt is a strong cryptographic key derivation function, designed to be memory intensive to  thwart GPU, ASIC and FPGA based attacks.
 * It takes several input parameters and produces a secret key with the desired length as output.
 * For generating secret keys scrypt submodule of Ethereum-Cryptography library  exposes the following function:
 * @see function scrypt(password: Uint8Array, salt: Uint8Array, N: number, p: number, r: number, dkLen: number): Promise<Uint8Array>;
 */
import { scrypt } from "ethereum-cryptography/scrypt";
import { utf8ToBytes, bytesToHex } from "ethereum-cryptography/utils";
import loremIpsum from "../lorem-ipsum.js";

const password = loremIpsum;
const salt = "salty";
const N = 1024;
const p = 8;
const r = 1;
const dkLen = 32;

const hash = await scrypt(
  utf8ToBytes(password),
  utf8ToBytes(salt),
  N,
  p,
  r,
  dkLen
);

console.log(bytesToHex(hash));
