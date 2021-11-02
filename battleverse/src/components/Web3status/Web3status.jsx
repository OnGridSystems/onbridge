import { useState, useEffect } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'

import { injected } from '../../utils/web3/connectors'
import { useEagerConnect, useInactiveListener } from '../../utils/web3/hooks'

const connectorsByName = {
  Injected: {
    text: 'Connect',
    connector: injected,
  },
}

export function Web3status({ type, ...props }) {
  const { connector, activate, deactivate, active, error } = useWeb3React()
  const wrongNetwork = error instanceof UnsupportedChainIdError

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState()
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  const Status = ({ type }) =>
    active ? (
      <div type={type}></div>
    ) : error ? (
      <div type={type}>
        {wrongNetwork && connector === injected ? 'Wrong network' : 'Error'}
      </div>
    ) : (
      <></>
    )

  const StatusContent = () => {
    if (error instanceof UnsupportedChainIdError) {
      return <span>Wrong Network</span>
    }

    const TryAgain = () => (
      <>
        <span>Error</span>
        <button
          className='button'
          onClick={() => {
            if (connector === injected) {
              deactivate()
            }
          }}
        >
          Try again
        </button>
      </>
    )

    if (connector === injected) {
      if (error) {
        return <TryAgain />
      }

      return <></>
    }

    if (error) {
      return <span>Error. Try to reload the page.</span>
    }

    return (
      <>
        {Object.keys(connectorsByName).map(name => {
          const currentConnector = connectorsByName[name].connector
          const connected = currentConnector === connector
          const disabled =
            !triedEager || !!activatingConnector || connected || !!error

          const connectFunction = () => {
            setActivatingConnector.call(this, currentConnector)
            activate.call(this, connectorsByName[name].connector)
          }

          return (
            <button
              className='button'
              disabled={disabled}
              key={name}
              onClick={connectFunction}
            >
              {connectorsByName[name].text}&nbsp;
            </button>
          )
        })}
      </>
    )
  }

  return (
    <div className='web3status' {...props}>
      <StatusContent />
      <Status type={type} />
    </div>
  )
}
