import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export default async function handler(req, res) {
  const { name, title, message, email } = req.body
  if (!name || !title || !message || !email) {
    return res.status(404).send('All fields required')
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'szymonprusak.spam@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: name + '&lt;' + email,
    to: 'szymonprusak.code@gmail.com',
    subject: `Message from ${name}, ${title}`,
    text: message + ' | Sent from: ' + name,
    html: `<div>
    <h2>${title}</h2>
    <p>${message}</p> <br/>
    <p>sent from: <strong>${email}</strong></p>
    </div>`,
  }

  try {
    await transporter.sendMail(mailData)

    res.status(200).send('success')
  } catch (error) {
    res.status(404).send(error)
  }
}
