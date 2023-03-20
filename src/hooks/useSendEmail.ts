import axios from "axios";

interface Props {
    name:       string;
    email:      string;
    subject:    string;
    message:    string;
}

export const useSendEmail =  () => {
        
    

    const sendMail = async ({ name, email, subject, message }: Props):Promise<boolean> => {
            
        try {
            await axios.post('/api/email', {
                name, email, subject, message
            })
            return true;
        } catch (error) {
            // console.log(error)
            return false;
        }    
    
    };

    return [ sendMail ] 
    

};