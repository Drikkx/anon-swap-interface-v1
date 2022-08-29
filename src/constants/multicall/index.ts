import { ChainId } from 'anonswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x73B89596c2cB3c48d6A3F53443581FdF20D46089',
  6: ''
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
