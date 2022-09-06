import React, { useEffect, useState } from 'react';
import { AXIOS } from 'utils/setup/axios';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const AnalyticsContainerStyle = {
	display: 'flex', 
	justifyContent: 'space-between', 
	background: 'rgba(232, 241, 245, 0.9)',
	boxShadow: '1px 4px 4px rgba(62, 101, 136, 0.15)',
	borderRadius: '6px',
	padding: '10px',
	marginBottom: '3rem'
}


const Analytics = () => {
	const [groups, setGroups] = useState(null);
	useEffect(() => {
		// 6308ccffb4dbd48f6c270686
		// https://api-dev.kwikpic.in/api/app/group/my-groups-v2
		// https://api-dev.kwikpic.in/api/app/analytics/groupAnalytics/630c7195b8972cf4ca34ea5b
		AXIOS.get('https://api-dev.kwikpic.in/api/app/group/my-groups-v2')
			.then((res) => setGroups(res.data))
			.catch((err) => console.error(err))

	}, [])

	console.log(groups)

	return (
		<Container>
			<Row>
				<Col>
					<Container>
						<h1>Analytics</h1>
						<Nav fill style={{ display: 'flex', flexDirection: 'Column' }} variant="tabs" defaultActiveKey="/home">
							<Nav.Item>
								<Nav.Link href="/home">Event Name - 1234</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-1">Event Name - 1234</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-2">Event Name - 1234</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-3">Event Name - 1234</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-4">Event Name - 1234</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-5">Event Name - 1234</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-6">Event Name - 1234</Nav.Link>
							</Nav.Item>
						</Nav>
					</Container>
				</Col>
				<Col xs={9}>
					<Container>
						<div style={{ display: 'flex', alignItems: 'baseline'}}>
							<h3>John & Joe Wedding</h3>
							<p>3rd January, 2021</p>
						</div>
						<div style={{ width: '3rem', height: '2px', background: '#EAE200', marginBottom: '2rem'}} className='yellow-line'></div>
					</Container>
					<Container style={AnalyticsContainerStyle}>
						<div className='contents-analytics'>
							<p>Total Impression</p>
							<h1>90772</h1>
						</div>
						<div className='contents-analytics'>
							<p>Total Impression</p>
							<h1>90772</h1>
						</div>
						<div className='contents-analytics'>
							<p>Total Impression</p>
							<h1>90772</h1>
						</div>
						<div className='contents-analytics'>
							<p>Total Impression</p>
							<h1>90772</h1>
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
							{[...Array(10)].map((_id) => (
								<tr key={_id}>
									<td>Harsh Khaitan</td>
									<td>harshkhaitan@ymail.com</td>
									<td>+91 9876543210</td>
									<td>53</td>
									<td>53</td>
									<td>53</td>
									<td>53</td>
								</tr>
							))
							}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	)
}

export default Analytics;