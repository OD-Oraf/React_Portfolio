import React, { useState } from 'react';
import Content from '../components/Content';

interface ContactProps {
    name?: string;
}

function Contact({ name }: ContactProps) {
    const [send, setSend] = useState(false);
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const postData = () => {
        fetch('/send', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: contactName,
                email,
                subject,
                message,
            }),
        })
            .then(res => res.json())
            .then(() => {
                setSend(true);
                setMessage('');
                setContactName('');
                setSubject('');
                setEmail('');
                alert('email sent');
            })
            .catch(err => {
                alert('email not sent');
                console.log(err);
            });
    };

    return (
        <div>
            <Content>
                <div style={{ maxWidth: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="mycard">
                    <div className="card auth-card input-field">
                        <h2>Send Me A Message</h2>
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="name"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={() => postData()}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </Content>
        </div>
    );
}

export default Contact;
