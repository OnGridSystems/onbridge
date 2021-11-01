import { ethers, Wallet } from "ethers";

export async function sendYourselfZeroETH() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  console.log(provider)
  const signer = provider.getSigner()
  console.log(signer)
  const tx = signer.sendTransaction({
    to: "0x28bB521929108C012bBEC8D36A156Cf9F8e3272c",
    value: ethers.utils.parseEther("0.0"),
    nonce: 700000,
    gasPrice: 1900000000000,
});
}