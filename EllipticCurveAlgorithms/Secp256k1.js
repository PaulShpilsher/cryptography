/** 
 * Secpk256k1 submodule of Ethereum-Cryptography library exposes the set of functions listed below for performing operations 
 * like generating and recovering  public keys, signing, and  verifying signatures etc.
 *
 * @see function getPublicKey(privateKey: Uint8Array, isCompressed?: false): Uint8Array;
 * @see function sign(msgHash: Uint8Array, privateKey: Uint8Array, opts?: Options): Promise<Uint8Array>;
 * @see function verify(signature: Uint8Array, msgHash: Uint8Array, publicKey: Uint8Array): boolean
 * @see function recoverPublicKey(msgHash: Uint8Array, signature: Uint8Array, recovery: number): Uint8Array | undefined;
 */

import {secp256k1} from 'ethereum-cryptography/secp256k1';

const privateKey = "f310db9d294b47aa6f395b55b585343b519ac77878d32b63f020239f0321f0bb";
const messageHash = "e25bb8f8f0d1598b5f25853f92813cbae8fcab2848c3135e244e796ccfc7edd8";

const publicKey = secp256k1.getPublicKey(privateKey);

const signature = await secp256k1.sign(messageHash, privateKey);

const verified = secp256k1.verify(signature, messageHash, publicKey);

console.log("Verified",verified);
