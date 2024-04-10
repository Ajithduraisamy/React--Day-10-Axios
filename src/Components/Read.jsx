import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Read() {
    const [apidata, setAPIdata] = useState([]);
    const navigate = useNavigate();

    const editUser = ({ id, name, username, email, address, geo, phone, website, company }) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("username", username)
        localStorage.setItem("email", email)
        localStorage.setItem("address", address)
        localStorage.setItem("geo", geo)
        localStorage.setItem("phone", phone)
        localStorage.setItem("website", website)
        localStorage.setItem("company", company)
        navigate('/update')
    }

    const deleteUser = async (id) => {
        await axios.delete(API_URL + id)
        getapidata()
    }

    const getapidata = async () => {
        const res = await axios.get(API_URL)
        console.log(res)
        setAPIdata(res.data)
    }

    useEffect(() => {
        getapidata()
    }, [])

    const addnewUser = () => {
        navigate('/create')
    }

    return (
        <>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>UserName</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Geo</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apidata.map(data => (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.name}</Table.Cell>
                            <Table.Cell>{data.username}</Table.Cell>
                            <Table.Cell>{data.email}</Table.Cell>
                            <Table.Cell>{data.address}</Table.Cell>
                            <Table.Cell>{data.geo}</Table.Cell>
                            <Table.Cell>{data.phone}</Table.Cell>
                            <Table.Cell>{data.website}</Table.Cell>
                            <Table.Cell>{data.company}</Table.Cell>
                            <Table.Cell><Button className='btn btn-warning' onClick={() => editUser(data)}>EDIT</Button></Table.Cell>
                            <Table.Cell><Button className="btn btn-danger" onClick={() => deleteUser(data.id)}>DELETE</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <button className='btn btn-success' onClick={addnewUser}>CREATE NEW</button>
        </>
    )
}

export default Read