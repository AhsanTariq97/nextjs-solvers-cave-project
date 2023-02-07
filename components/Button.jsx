import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ onClick,type, bgColor, text, pl, icon }) => {
  return (
    <button onClick={onClick} type={type} className={`px-6 py-2 bg-[${bgColor}] font-normal text-base rounded-sm text-white border-2 border-[#58ae57] outline-none hover:bg-white hover:text-black`}>{text}<span className={`${pl}`}>{icon && <FontAwesomeIcon icon={icon} />}</span></button>
  )
}

export default Button
