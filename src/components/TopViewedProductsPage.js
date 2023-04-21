import React from 'react'
import { Bar, Doughnut, Line, Radar } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ProductApi from '../data/ProductApi';
import _ from 'lodash'
import { useState } from 'react';
import { useEffect } from 'react';


export default function TopViewedProductsPage() {   
    const [user, setUser] = useState({})
    
    useEffect(() => {        
        ProductApi.getProductViews(productViews => {
            console.log(productViews);
            const grouped = _(productViews).groupBy('productName').value()
            // console.log(Object.keys(grouped).map(e => e));
            // console.log(grouped);
            let labelArray = Object.keys(grouped)
            let Value = Object.values(grouped)
            console.log(labelArray);
            console.log(Value);
            const dataValue = {
                labels: labelArray,
                datasets: [
                    {
                        label: 'Product Views',
                        backgroundColor: '#F7A4A4',
                        borderColor: '#EEEEEE',
                        borderWidth: 2,
                        data: Object.keys(grouped).map(key => grouped[key].length)
                        // data : Value
                        // labelsData : 
                        // data : Object.values(grouped).map(e =>console.log(e))
                    }
                ]
            }            
            setUser( dataValue)            
        })
    }, [])

    return (        
        <div>                        
            <Container className="mt-5">
                <Row>
                    <Col className="animate__animated animate__slideInLeft">
                        <Bar                            
                            data={user}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Top Viewed Products',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'left'
                                }
                            }}
                        />
                    </Col>
                    <Col  className="animate__animated animate__slideInLeft">
                        <Doughnut
                            data={user}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Top Viewed Products',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'left'
                                }
                            }}
                        />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col  className="animate__animated animate__slideInDown">
                        <Line
                            data={user}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Top Viewed Products',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'left'
                                }
                            }}
                        />
                    </Col>
                    <Col  className="animate__animated animate__slideInUp">
                        <Radar
                            data={user}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Top Viewed Products',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'left'
                                }
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
