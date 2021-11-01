import { ethers, Wallet } from "ethers";

export async function sendYourselfZeroETH() {
  const tx = {
    to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
    value: ethers.utils.parseEther("0.0")
  }

  const mnemonic = "song wave piece winter defense aerobic barely girl alien six wave aspect"
  const walletMnemonic = Wallet.fromMnemonic(mnemonic)
  const walletPrivateKey = new Wallet(walletMnemonic.privateKey)
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  const wallet = walletMnemonic.connect(provider)
  // Sending ether
  await wallet.sendTransaction(tx)
}