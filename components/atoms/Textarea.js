import { useFormContext } from 'react-hook-form'

const Textarea = ({ name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='flex flex-col gap-1'>
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
      <textarea
        {...register(name, { required: true })}
        className=' input resize-none h-28'
      />
    </div>
  )
}

export default Textarea
