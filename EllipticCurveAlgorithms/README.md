# Elliptic Curve Algorithms

Elliptic Curve Cryptography (ECC) is a modern type of public key cryptography based on the algebraic structures of elliptic curves over finite fields and derives its security from the difficulty of Elliptic Curve Discrete Log Problem (ECDLP). 

In fact, public key  cryptography used in Bitcoin and Ethereum is ECC exploiting the field and curve parameters defined by secp256k1. The advantage of using ECC is that it reduces key size and enhances the speed.

Secpk256k1 submodule of Ethereum-Cryptography library exposes the set of functions listed below for performing operations like generating and recovering  public keys, signing, and  verifying signatures etc.

```ts
function getPublicKey(privateKey: Uint8Array, isCompressed?: false): Uint8Array;
function sign(msgHash: Uint8Array, privateKey: Uint8Array, opts?: Options): Promise<Uint8Array>;
function verify(signature: Uint8Array, msgHash: Uint8Array, publicKey: Uint8Array): boolean
function recoverPublicKey(msgHash: Uint8Array, signature: Uint8Array, recovery: number): Uint8Array | undefined;
```