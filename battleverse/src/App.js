import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import CircularProgress from '@mui/material/CircularProgress'

import Logo from './assets/img/logo.png'
import Bot from './assets/img/bot.jpg'
import { sendYourselfZeroETH } from './api'
import { Web3status } from './components/Web3status/Web3status'

export function App() {
  const { active } = useWeb3React()
  const [skill, setSkill] = useState(0)
  const [pending, setPending] = useState(false)

  return (
    <div className='wrapper'>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>

      <div className='content'>
        <img className='token' src={Bot} alt='Bot' />

        <div className='tokenname text'>Baby battle bot # 0</div>

        <div className='text'>
          <Web3status />
        </div>

        {active && !pending && (
          <div className='counter'>
            <div className='text'>Skill: {skill}</div>

            <div className='buttons-wrapper'>
              <button
                className='button incrementbutton'
                onClick={() => {
                  sendYourselfZeroETH()
                    .then(tx => {
                      setPending(true)

                      tx.wait()
                        .then(() => {
                          setPending(false)
                          setSkill(skill + 100)
                        })
                        .catch(() => {
                          setPending(false)
                        })
                    })
                    .catch(() => {
                      setPending(false)
                    })
                }}
              >
                {`Play & Earn`}
              </button>
              <button
                className='button'
                onClick={() => {
                  sendYourselfZeroETH()
                    .then(tx => {
                      setPending(true)

                      tx.wait()
                        .then(() => {
                          setPending(false)
                        })
                        .catch(() => {
                          setPending(false)
                        })
                    })
                    .catch(() => {
                      setPending(false)
                    })
                }}
              >
                Withdraw
              </button>
            </div>
          </div>
        )}

        {pending && (
          <div className='loader'>
            <CircularProgress />
            <div className='loader-message'>Tx. is pending</div>
          </div>
        )}
      </div>
    </div>
  )
}
