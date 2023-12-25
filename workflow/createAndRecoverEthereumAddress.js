
import {secp256k1} from 'ethereum-cryptography/secp256k1';
import { pbkdf2 } from 'ethereum-cryptography/pbkdf2';
import { bytesToHex, hexToBytes } from 'ethereum-cryptography/utils';
import { sha256 } from 'ethereum-cryptography/sha256';
import { utf8ToBytes } from 'ethereum-cryptography/utils';
import { keccak256 } from 'ethereum-cryptography/keccak';
//import {publicKeyToAddress} = 'ethereum-public-key-to-address';


// Step-1
const privateKey = bytesToHex(await pbkdf2(utf8ToBytes("Crypto Rules"), utf8ToBytes("Hello"), 999, 32, "sha256"));//Generate through PBKDF2/Scryprt/CSPRNG

// Step-2
const messageHash = bytesToHex(sha256(utf8ToBytes("Web3 is Awesome"))); // Generate Using SHA256 on message "Web3 is Awesome"

// Step-3
const publicKey = bytesToHex(secp256k1.getPublicKey(privateKey,false));
//const publicKey = secp256k1.getPublicKey(privateKey);
console.log("Public Key Before Recovery", (publicKey));
const EthAddressBeforeRecovery="0x" + bytesToHex(keccak256(hexToBytes(publicKey.substring(2)))).substring(24)

// Step-4 Generate Signer's Ethereum Address from Public Key using Keccak256
console.log("Ethereum Address Before Recovery", "0x" + bytesToHex(keccak256(hexToBytes(publicKey.substring(2)))).substring(24))

//Step-5
const signature = await secp256k1.sign(messageHash, privateKey);

//Step-6
const isSigned = secp256k1.verify(signature, messageHash, publicKey);
console.log("Is Signature Valid", isSigned)

//Step-7
//const recoveredPubKey = bytesToHex(secp256k1.recoverPublicKey(messageHash, signature, 1))
//signature.addRecoveryBit(1);
const recoveredPubKey=signature.recoverPublicKey(messageHash).toHex(false)
console.log()
//console.log("Test code",publicKeyToAddress((recoveredPubKey)))
//console.log("Public Key After Recovery", (recoveredPubKey))

//Step-8
const EthAddressAfterRecovery="0x" + bytesToHex(keccak256(hexToBytes(recoveredPubKey.substring(2)))).substring(24)
console.log("Ethereum Address after Recovery ", "0x" + bytesToHex(keccak256(hexToBytes(recoveredPubKey.substring(2)))).substring(24))

if (EthAddressBeforeRecovery==EthAddressAfterRecovery)
  console.log("Ethereum Addresses Match Project Completed ")
