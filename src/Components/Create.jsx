import React, { useState } from 'react'
import { API_URL } from '../Constants/URL'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Create() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [geo, setGeo] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [company, setCompany] = useState('')

    const navigate = useNavigate();

    const postdata = async () => {
        await axios.post(API_URL, {
            name,
            username,
            email,
            address,
            geo,
            phone,
            website,
            company
        })
        navigate('/')
    }

    return (
        <Form>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Name</label>
                    <div className="col-lg-8">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Username</label>
                    <div className="col-lg-8">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Username' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Email</label>
                    <div className="col-lg-8">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Address</label>
                    <div className="col-lg-8">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter your address' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Geo</label>
                    <div className="col-lg-8">
                        <input type="text" value={geo} onChange={(e) => setGeo(e.target.value)} placeholder='Enter your geo' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Phone</label>
                    <div className="col-lg-8">
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Website</label>
                    <div className="col-lg-8">
                        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder='Enter your website' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Form.Field>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-lg-4 col-form-label">Company</label>
                    <div className="col-lg-8">
                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter your company' className="form-control" id="inputEmail3" />
                    </div>
                </div>
            </Form.Field>
            <Button className="btn btn-success" onClick={postdata}>Submit</Button>
        </Form>
    )
}

export default Create