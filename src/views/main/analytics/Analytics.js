import React, { useEffect, useState } from 'react';
import { AXIOS } from 'utils/setup/axios';
import { Container, Row, Col, Nav } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
import { Outlet } from 'react-router-dom';

// const AnalyticsContainerStyle = {
// 	display: 'flex', 
// 	justifyContent: 'space-between', 
// 	background: 'rgba(232, 241, 245, 0.9)',
// 	boxShadow: '1px 4px 4px rgba(62, 101, 136, 0.15)',
// 	borderRadius: '6px',
// 	padding: '10px',
// 	marginBottom: '3rem'
// }


const Analytics = () => {
	const [groups, setGroups] = useState([]);
	// const [participants, setParticipants] = useState([]);
	// const [groupInfo, setGroupInfo] = useState([])
	useEffect(async () => {
		// 6308ccffb4dbd48f6c270686
		// https://api-dev.kwikpic.in/api/app/group/my-groups-v2
		// https://api-dev.kwikpic.in/api/app/analytics/groupAnalytics/630c7195b8972cf4ca34ea5b
		await AXIOS.get('https://api-dev.kwikpic.in/api/app/group/my-groups-v2')
			.then((res) => {
				setGroups(res.data.data.myGroups)
			})
			.catch((err) => console.error(err))
			
		}, [])
		console.log(groups)
		// console.log(participants)
	return (
		<Container>
			<Row>
				<Col>
					<Container>
						<h1>Analytics</h1>
						<Nav fill style={{ display: 'flex', flexDirection: 'Column' }} variant="tabs" defaultActiveKey="/home">
							{groups.map((content) => (
									<Nav.Item key={content.count}>
										<Nav.Link href={"/analytics/" + content.group._id}>{content.group.name}</Nav.Link>
									</Nav.Item>
								)
							)}
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
					<Outlet/>
				</Col>
			</Row>
		</Container>
	)
}

export default Analytics;