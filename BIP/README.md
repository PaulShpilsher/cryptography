# BIP 32 & BIP 39

## BIP 32

Bitcoin Improvement Proposal 32 (BIP32) is a wallet standard that describes how to derive private and public keys of a wallet from a binary master seed (m) and an ordered set of indices. 

BIP32 was originally designed for Bitcoin, later it was extended to be used for other Blockchains like Ethereum. 

Wallets that are BIP32 compliant are called Hierarchical Deterministic (HD) wallets. 

BIP32 was mainly designed with a goal to create a tree of key pairs utilising  single seed only and deriving wallet structure based on these key pairs. BIP32 compliant HD wallets offer several advantages in terms of backup, security , portability etc.

BIP32 extended keys are represented in terms of derivation path, to better understand this let’s take a simple example.

- The master private key is _m_.
- The first normal child of the master private key is _m/0_ (first normal child private key of master private key).
- The first hardened child of the master private key is _m/0′_ (first hardened child private key of master private key).
- The first normal child of _m/0_ is _m/0/0_ (first normal grandchild private key of master private key) and so on.
- The last character in the derivation path (_m/0/0 _) indicates which one is the child of the parent and the rest of the path is the parent. It is also important to note that the private key derivation path starts with lowercase _m_ while the public key derivation path starts with uppercase _M_. 


## BIP39 Mnemonic Seed Phrase

Bitcoin Improvement Proposal 39 (BIP39) is a wallet standard that lays out how mnemonic seed phrases are to be generated for the creation of deterministic wallets. 

In essence BIP39 is a way to represent a randomly generated  number (entropy) in the form of a sequence of words (Mnemonic seed phrase). 

BIP39 essentially has two parts: 

- Generating  mnemonic seed phrase and converting it to binary seed
- Generating deterministic wallets from binary seed according to the BIP32 standard

Mnemonic seed phrase is an easy to remember group of words (with length depending on size of entropy) chosen from wordlist (each word can be picked from wordlist without any ambiguity by just typing the initial 4 characters of the word) of 2048 words. 

BIP39 also allows using an optional passphrase for providing additional security to wallets.
