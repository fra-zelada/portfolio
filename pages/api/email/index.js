import { google } from 'googleapis'

import nodemailer from 'nodemailer'

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const EMAIL_AND_NAME_FROM = process.env.EMAIL_AND_NAME_FROM
const EMAIL_FROM = process.env.EMAIL_FROM
const EMAIL_TO = process.env.EMAIL_TO

export default function handler(req = NextApiRequest, res = NextApiResponse) {
    
    switch ( req.method ) {
        case 'POST':
            
            return newEmail(req, res)
            
    
        default:
            res.status(404).json({ name: 'Not Found' })
            break;
    }


}


async function newEmail(req= NextApiRequest, res = NextApiResponse) {
    
    const oAuth2Client = new google.auth.OAuth2( CLIENT_ID, CLIENT_SECRET, REDIRECT_URI )
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

    const { name, email, message, subject } = req.body;

    try {
        
        const accessToken = await oAuth2Client.getAccessToken();
        const configuration = {
            service: 'gmail',
            auth:{
                type:'OAuth2',
                user: EMAIL_FROM,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        }
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                type:'OAuth2',
                user: EMAIL_FROM,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: EMAIL_AND_NAME_FROM,
            to: EMAIL_TO,
            subject: `${ subject }`,
            text: `${ name } | ${ email } | ${message}`,
            html: `<h1>${ name } | ${ email } | ${message}</h1>`
        }

        const result = await transport.sendMail(mailOptions)
        
        res.status(200).json({ message: 'Send!' })
    } catch (error) {
        res.status(400).json({ message: 'Bad Request' })

    }


}


