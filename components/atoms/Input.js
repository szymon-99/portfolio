import { useFormContext } from 'react-hook-form'

const Input = ({ name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='flex flex-col gap-1 '>
      <div className='flex justify-between'>
        <label className='label group-focus:text-yellow-500' htmlFor={name}>
          {name}
        </label>
        {errors[name] && (
          <span className='text-red-400 text-xs md:text-sm'>
            {errors[name].message}
          </span>
        )}
      </div>
      <input {...register(name, { required: true })} className=' input group' />
    </div>
  )
}

export default Input
