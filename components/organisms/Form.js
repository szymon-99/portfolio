import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Form = () => {
  const { register, handleSubmit, formState } = useForm()
  const [isSuccess, setIsSuccess] = useState(false)

  return <div></div>
}

export default Form
