import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import { Web3status } from "./components/Web3status/Web3status";
import { sendYourselfZeroETH } from './api'

export function App() {
  const { connector, account, activate, deactivate, active, error } =
    useWeb3React()
  const [skill, setSkill] = useState(0)

  return (
    <div className='wrapper'>
      <div className='logo'><img src="https://uploads-ssl.webflow.com/615802989bf0553e8b33da93/615ca4091ba50ae18c5fbe0a_lo.png"/></div>
      <div className='text'><Web3status /></div>
      {active && <div className="counter">
        <div>Token skill: {skill}
          <br/>
          <button className="button incrementbutton" onClick={() => setSkill(skill + 1)}>Increment</button>
          <button className="button incrementbutton" onClick={() => sendYourselfZeroETH()}>Send ys 0 bnb</button>
        </div>
      </div>}
      
    </div>
  );
}
