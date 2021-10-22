import { useFormContext } from 'react-hook-form'
import { Label } from '../atoms'

const Input = ({ name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='flex relative'>
      <input
        {...register(name, { required: true })}
        className={`input peer
        ${errors[name] && 'border-red-400 focus:border-red-400'}`}
        placeholder={name}
      />
      <Label name={name} error={errors[name]} />
    </div>
  )
}

export default Input
