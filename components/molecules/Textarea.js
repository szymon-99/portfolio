import { useFormContext } from 'react-hook-form'
import { Label } from '../atoms'

const Textarea = ({ name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='flex relative'>
      <textarea
        rows='2'
        {...register(name, { required: true })}
        className={` peer input resize-none
      ${errors[name] && 'border-red-400 focus:border-red-400'}`}
        placeholder={name}
      />
      <Label name={name} error={errors[name]} />
    </div>
  )
}

export default Textarea
