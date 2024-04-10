import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Update() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [geo, setGeo] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [company, setCompany] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setUsername(localStorage.getItem("username"))
        setEmail(localStorage.getItem("email"))
        setAddress(localStorage.getItem("address"))
        setGeo(localStorage.getItem("geo"))
        setPhone(localStorage.getItem("phone"))
        setWebsite(localStorage.getItem("website"))
        setCompany(localStorage.getItem("company"))
    }, [])

    const updateUser = async () => {
        await axios.put(API_URL + id, {
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
            <Button className="btn btn-info" onClick={updateUser}>Update</Button>
        </Form>
    )
}

export default Update