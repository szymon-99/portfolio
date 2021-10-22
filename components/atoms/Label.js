const Label = ({ name, error }) => {
  return (
    <label
      className={`
    ${
      error
        ? 'text-red-400 peer-placeholder-shown:text-red-400 peer-focus:text-red-400'
        : 'text-yellow-500 peer-focus:text-yellow-500 peer-placeholder-shown:text-gray-600'
    }
    label
     peer-focus:top-1 peer-focus:left-1   peer-focus:scale-90 peer-focus:font-semibold peer-focus:-translate-y-6
     peer-focus:-translate-x-0
    peer-placeholder-shown:translate-y-0   peer-placeholder-shown:font-normal peer-placeholder-shown:text-base peer-placeholder-shown:translate-x-2
`}
      htmlFor={name}
    >
      {name}
    </label>
  )
}

export default Label
