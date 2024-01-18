import express, { Router, json } from 'express'
import cors from 'cors'
import { createTransport } from 'nodemailer'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { body, validationResult } from 'express-validator'

dotenv.config()

if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_PASS) {
console.error('Required environment variables are missing.')
process.exit(1) // Exit the application
}

const router = Router()
const PORT = process.env.PORT || 5000

// Server used to send emails
const app = express()
app.set('trust proxy', 1);
app.use(helmet())
app.use(cors())

// Rate limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // 100 requests per windowMs
})

app.use('/api/', apiLimiter)
app.use(json())
app.use('/', router)

const contactEmail = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
    },
})

contactEmail.verify(async(error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Ready to Send')
    }
})

// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' })
})

router.post('/api/contact', [
    body('email').isEmail().normalizeEmail(),
    body('name').trim().escape(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ code: 400, status: 'Bad Request', errors: errors.array() })
    }
    try {
        const name = req.body.name || 'No name provided'
        const email = req.body.email
        const phone = req.body.phone
        const message = req.body.message
        
        // Validate the incoming data if needed

        const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: 'Contact Form Submission - Portfolio',
        html:  `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
        }

        // Send the email
        await contactEmail.sendMail(mail)
        res.json({ code: 200, status: 'Message Sent' })

    } catch (error) {
        // If any other error occurs during the processing, handle it here
        console.error('Error processing request:', error)
        res.status(500).json({ error: 'Internal server error.' })
    }
})

app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy.')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
console.log(`Server Running on Port: ${PORT}`)
})