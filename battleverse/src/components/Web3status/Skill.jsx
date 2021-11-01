import { sendYourselfZeroETH } from '../../api/index'

export function Skill({ skill, ...props }) {

  return (
    <div {...props}>
      Skill: { skill }
      <br/>
      <button
        className="button"
        onClick={() => {
            skill = sendYourselfZeroETH(skill)
            console.log(skill)
        }}
      >
        Withdraw
      </button>
    </div>
  )
}