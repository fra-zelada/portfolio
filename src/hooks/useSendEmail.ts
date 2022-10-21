import axios from "axios";

interface Props {
    name:       string;
    email:      string;
    subject:    string;
    message:    string;
}

export const useSendEmail =  () => {
        
    

    const sendMail = async ({ name, email, subject, message }: Props) => {
            
        try {
            await axios.post('/api/email', {
                name, email, subject, message
            })
            return true;
        } catch (error) {
            return false;
            console.log(error)
        }    
    
    };

    return [ sendMail ]
    

};