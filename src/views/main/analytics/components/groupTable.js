import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { AXIOS } from 'utils/setup/axios'
const AnalyticsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(232, 241, 245, 0.9)',
    boxShadow: '1px 4px 4px rgba(62, 101, 136, 0.15)',
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '3rem'
}

const GroupTable = () => {
    const { groupId } = useParams()
    const [participants, setParticipants] = useState([]);
    const [group, setGroup] = useState([])
    useEffect(async () => {
        await AXIOS.get(`https://api-dev.kwikpic.in/api/app/analytics/groupAnalytics/${groupId}`)
            .then((res) => {
                setParticipants(res.data.data.participants)
                setGroup(res.data.data.group)
            })
            .catch((err) => console.error(err))
    }, [])

    console.log(group)
    console.log("----------")
    console.log(participants)
    return (
        <div>
            <Container style={AnalyticsContainerStyle}>
                <div className='contents-analytics'>
                    <p>Total Impression</p>
                    <h1>{group.impressions}</h1>
                </div>
                <div className='contents-analytics'>
                    <p>Photo Dicovered</p>
                    <h1>{group.discoveries}</h1>
                </div>
                <div className='contents-analytics'>
                    <p>Photos Downloaded</p>
                    <h1>{group.downloads}</h1>
                </div>
                <div className='contents-analytics'>
                    <p>Registered Users</p>
                    <h1>{group.participants}</h1>
                </div>
            </Container>
            <Table size='sm'>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Impression</th>
                        <th>Results</th>
                        <th>Photos Discovered</th>
                        <th>Photos Downloaded</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map((participant) => (
                        <tr key={participant.phone}>
                            <td>{participant.userName}</td>
                            <td>{participant.email}</td>
                            <td>+91 {participant.phone}</td>
                            <td>{participant.impressions}</td>
                            <td>{participant.results}</td>
                            <td>{participant.discovered}</td>
                            <td>{participant.downloaded}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default GroupTable