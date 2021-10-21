import { useForm, FormProvider } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { Input, Textarea, Alert } from '../atoms'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactFormSchema } from '../../utils/constanst'
import { motion, AnimatePresence } from 'framer-motion'

const Form = () => {
  const methods = useForm({
    resolver: yupResolver(contactFormSchema),
  })
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const submitHandler = async (data) => {
    setIsError(false)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      reset()
      setIsSuccess(true)
      return
    }
    setIsError(true)
    reset()
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }
    if (isError) {
      setTimeout(() => {
        setIsError(false)
      }, 5000)
    }
  }, [isSuccess, isError])

  return (
    <FormProvider {...methods}>
      <motion.form
        layout
        onSubmit={handleSubmit(submitHandler)}
        className='grid gap-4 max-w-sm w-full'
      >
        <Input name='name' />
        <Input name='email' />
        <Input name='title' />

        <Textarea name='message' />

        <AnimatePresence exitBeforeEnter>
          {isError && <Alert type='error'>Sorry, something went wrong</Alert>}
          {isSuccess && (
            <Alert type='success'>Success! Thank you for your message</Alert>
          )}
        </AnimatePresence>

        <button
          type='submit'
          disabled={isSubmitting}
          className='btn  hover:opacity-75 focus-visible:ring-gray-800  px-3 text-base mt-2  transition bg-yellow-500 disabled:opacity-50'
        >
          Submit
        </button>
      </motion.form>
    </FormProvider>
  )
}

export default Form
