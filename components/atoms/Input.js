const Input = ({ register, name }) => {
  return (
    <div className='flex flex-col gap-2 group'>
      <label className='block' htmlFor={name}>
        {name}
      </label>
      <input />
    </div>
  )
}

export default Input
