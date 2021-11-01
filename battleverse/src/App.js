import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import { Web3status } from "./components/Web3status/Web3status";
import { Skill } from "./components/Web3status/Skill";

export function App() {
  const { active } =
    useWeb3React()
  const [skill, setSkill] = useState(0)

  return (
    <div className='wrapper'>
      <div className='token'><img src="https://api.onbridge.io/token_metadata/0.jpeg"/></div>
      <div className='tokenname'>Baby battle bot #0</div>
      <div className='logo'><img src="https://uploads-ssl.webflow.com/615802989bf0553e8b33da93/615ca4091ba50ae18c5fbe0a_lo.png"/></div>
      <div className='text'><Web3status /></div>
      {active && <div className="counter">
        <Skill skill={ skill }/>
        <button className="button incrementbutton" onClick={() => setSkill(skill + 100)}>Play and Earn</button>
      </div>
      }
      
    </div>
  );
}
