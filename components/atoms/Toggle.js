const Toggle = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className='md:hidden flex flex-col gap-1 justify-center z-20'
    >
      <span
        className={`w-6 h-0.5 rounded-md bg-black/75 transition ${
          isOpen && 'rotate-45 translate-y-[250%]'
        }`}
      ></span>
      <span
        className={`w-6 h-0.5 rounded-md  bg-black/75 transition ${
          isOpen && '-rotate-45 -translate-y-[250%]'
        }`}
      ></span>
    </button>
  )
}

export default Toggle
