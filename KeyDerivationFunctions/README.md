# Key Derivation Functions

Key Derivation Functions (KDFs) are cryptographic algorithms that are mainly used to derive one or more secret keys from other sources of entropy like password, passphrase etc. Other use cases for KDFs include Key stretching and obtaining keys in the desired format.

Note: The pbkdf2 and Scrypt submodules of Ethereum-Cryptography library has two functions implementing the PBKDF2 and Scrypt key derivation algorithms in synchronous and asynchronous ways.  We will be exploring an asynchronous version for practical demonstration due to slowness of the  respective algorithms.