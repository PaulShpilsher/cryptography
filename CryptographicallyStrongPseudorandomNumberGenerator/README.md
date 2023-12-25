# CSPRNG (Cryptographically strong pseudorandom number generator)
Cryptographically strong pseudorandom number generator (CSPRNG) generates pseudorandom numbers bearing  properties suitable for cryptographic usage. 

The security strength of the cryptographic systems heavily resides on the properties of these CSPRNGs.  

Cryptographically secure pseudorandom number generators are widely used for generating Nonces, Initial Vectors, Secret key materials etc. 

For generating random keys using random submodule of  Ethereum-Cryptography library  exposes following function:

```ts
  // const { getRandomBytes} = require("ethereum-cryptography/random");
  function getRandomBytes(bytes: number): Promise<Uint8Array>;
```
