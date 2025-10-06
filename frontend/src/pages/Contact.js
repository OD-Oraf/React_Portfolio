import React,{useState} from 'react'; 
import Content from '../components/Content' ; 

const Contact  = (props) => {
    const [send, setSend] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [subject,setSubject] = useState("")
    const [title,setTitle] = useState("")
    const postData = () =>{
        fetch("/send",{
            method:"post",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                subject,
                message
            })
        }).then(res=>res.json())
        .then( (data) =>{
            setSend(true)
            setMessage('')
            setName('')
            setSubject('')
            setEmail('')
            if (setSend){
                alert('email sent')
            }
        }).catch(err=>{
            if (!setSend){
                alert('email not sent')
            }
            console.log(err)
        })
    }

    

    return (
        <div>
            <Content>

                <div style={{maxWidth: '80%', display:'flex', flexDirection: 'column', alignItems:'center'}} className="mycard">
                    <div className="card auth-card input-field">
                        <h2>Send Me A Message</h2>
                        <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <input
                        type="text"
                        placeholder="subject"
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                        />
                        <textarea
                        type="text"
                        placeholder="Message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        />
                        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                        onClick={() => {
                            postData()
                        }}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </Content>
        </div>
    )
}


export default Contact; 