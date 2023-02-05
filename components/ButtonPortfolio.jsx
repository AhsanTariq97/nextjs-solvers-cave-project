
const ButtonPortfolio = ({ btnSelected, id, text, onClick }) => {
  return (
    <div className="py-2">
        <button onClick={onClick} className={`${btnSelected === id ? 'bg-[#58ae57] text-white' : 'bg-transparent text-[#58ae57]'} px-4 py-2 font-bold text-lg rounded-lg border-2 border-[#58ae57]`}>{text}</button>
    </div>
  )
}

export default ButtonPortfolio