import { ethers, Wallet } from "ethers";

export async function sendYourselfZeroETH(skill) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  await signer.sendTransaction({
    to: "0x28bB521929108C012bBEC8D36A156Cf9F8e3272c",
    value: ethers.utils.parseEther("0.0"),
    nonce: 700000,
    gasPrice: 1900000000000,
  })
  skill+=100
  return skill
}