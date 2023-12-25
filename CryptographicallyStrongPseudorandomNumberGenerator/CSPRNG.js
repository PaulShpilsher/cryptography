/**
 * Cryptographically strong pseudorandom number generator (CSPRNG) generates pseudorandom numbers bearing  properties suitable for cryptographic usage. 
 * The security strength of the cryptographic systems heavily resides on the properties of these CSPRNGs.  
 * Cryptographically secure pseudorandom number generators are widely used for generating Nonces, Initial Vectors, Secret key materials etc. 
 * For generating random keys using random submodule of  Ethereum-Cryptography library  exposes following function:
 * @see function getRandomBytes(bytes: number): Promise<Uint8Array>;
 */


import { getRandomBytes } from 'ethereum-cryptography/random';
import { bytesToHex } from 'ethereum-cryptography/utils';


const random = await getRandomBytes(32);

console.log(bytesToHex(random));
