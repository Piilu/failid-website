import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../Style/auth.css"
import { Link } from 'react-router-dom';
function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username,setUsername] = useState("");
    const handleSubmit = () =>{
        console.log("Email:",email, "\n","Password:",password, "\n","Username:",username);
    }
    return (
        <div className='center-form'>
            <div className="center">
                <h2>Registeeri</h2>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Hüüdnimi</Form.Label>
                    <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Hüüdnimi" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email aadress</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Sisesta email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Parool</Form.Label>
                    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Sisesta parool" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Logi sisse
                </Button>
                <Form.Group>

                   <p>Sul pole kasutajat? <Link to="/register">Registeeri kohe</Link></p> 
                </Form.Group>
            </div>
        </div >
    );
}

export default Register;