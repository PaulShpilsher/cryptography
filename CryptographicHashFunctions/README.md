# Cryptographic Hash Functions

Cryptographic Hash functions are special one-way mathematical functions that take variable size data/message as an input and produce a fixed size hash value as an output.

In relation to Blockchains they are mostly used to ensure the integrity of transactions however they also perform an essential role in proof of work consensus mechanism and wallet address generation.

It is because of the immutable nature of Cryptographic Hash functions that Blockchains are known to be immune to modification once something has been recorded on it.

Some of the important properties of cryptographic hash functions are listed below:

- Ease of Computation: It is easy to compute the hash value for any given input message
- Deterministic: The same message always results in the same hash value
- Non-invertible: It is computationally infeasible to recover the input from a given hash value
- Uniform distribution: The probability of a hash value is the same as any other for a range of inputs
- Collision resistance: No two different inputs yield the same hash
- Immutable: It is computationally infeasible to modify a message without its hash value being changed

