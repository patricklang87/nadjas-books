import React, {useState} from 'react';
import './Contact.css';

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');

    const handleSend = () => {
        const data = {
            name,
            email,
            subject,
            msg
        }
        //Axios Call to backend, verify data, email sent via SMTP, then:

        setSent(true);
        setName('');
        setEmail('');
        setSubject('');
        setMsg('');
    }

    const SentMsg = () => {
        return (
            <div>
                <p>Thank you for your message! We'll get back to you as soon as we can.</p>
                <p style={{color: 'red'}}>(This is for demonstration purposes only. However, a messaging component can implemented here, for example through use of the JavaScript SMTP library.)</p>
                <button onClick={() => setSent(false)}>
                    Send Another
                </button>
            </div>
        );
    }

    const MsgForm = () => {
        return (
            <div >
                <div style={{display: "block"}}>
                    <input type="text" max="30" placeholder="Name" />
                    <br />
                    <input type="email" max="30" placeholder="Email" required />
                    <br />
                    <input type="text" max="30" placeholder="Subject" />
                    <br />
                    <textarea placeholder="Hello!" max="25000" rows="7" cols="24" />
                    <br />
                    <button onClick={handleSend} >
                        Send
                    </button>
                </div>      
            </div>
        );
  
    }

    return (
        <div id="contact" className="section" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)'}}>
            <div style={{display: "block"}}>
                <h2>Contact Us</h2>
                <p>Questions, Concerns, or Praise? Get in touch!</p>
                <p><strong>Phone: </strong>(315) XXX-XXXX</p>
            </div>
            {(sent) ? <SentMsg /> : <MsgForm />}

        </div>
    )
}
