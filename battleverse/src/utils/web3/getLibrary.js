import { Web3Provider } from '@ethersproject/providers'

export function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 8000
  return library
}