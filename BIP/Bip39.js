/**
 * BIP39 Mnemonic Seed Phrase
 *
 * Bitcoin Improvement Proposal 39 (BIP39) is a wallet standard that lays out how mnemonic seed phrases are to be generated for the
 * creation of deterministic wallets. In essence BIP39 is a way to represent a randomly generated  number (entropy) in the form of
 * a sequence of words (Mnemonic seed phrase).
 *
 * BIP39 essentially has two parts:
 * - Generating  mnemonic seed phrase and converting it to binary seed
 * - Generating deterministic wallets from binary seed according to the BIP32 standard
 *
 * Mnemonic seed phrase is an easy to remember group of words (with length depending on size of entropy)
 * chosen from wordlist (each word can  be picked from wordlist without any ambiguity by just typing the
 * initial 4 characters of the word)  of 2048 words.
 *
 * BIP39 also allows using an optional passphrase for providing additional security to wallets.
 */

import {
  generateMnemonic,
  mnemonicToSeed,
  mnemonicToEntropy,
} from "ethereum-cryptography/bip39";
import { wordlist } from "ethereum-cryptography/bip39/wordlists/english";

import { hexToBytes, bytesToHex } from "ethereum-cryptography/utils";

// Generating 12 word mnemonic seed phrase
const mnemonic = generateMnemonic(wordlist);
console.log("Mnemonic: ", mnemonic);

// Generate entropy from mnemonic seed phrase
const entropy = mnemonicToEntropy(mnemonic, wordlist);
console.log("Entropy: ", bytesToHex(entropy));

// Generate binary seed from mnemonic seed phrase
const seed = await mnemonicToSeed(mnemonic);
console.log("Master Seed: ", bytesToHex(seed));
