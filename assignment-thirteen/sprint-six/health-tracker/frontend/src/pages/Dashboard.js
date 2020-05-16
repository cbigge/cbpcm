import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Chart } from 'react-charts'
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
        <React.Fragment>
            <Line />
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Length</th>
                        <th>Intensity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>May 10th, 2020</td>
                        <td>Cardio</td>
                        <td>60 minutes</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>May 11th, 2020</td>
                        <td>Weightlifting</td>
                        <td>65 minutes</td>
                        <td>Medium</td>
                    </tr>
                    <tr>
                        <td>May 12th, 2020</td>
                        <td>Cardio</td>
                        <td>60 minutes</td>
                        <td>Medium</td>
                    </tr>
                    <tr>
                        <td>May 13th, 2020</td>
                        <td>Weightlifting</td>
                        <td>55 minutes</td>
                        <td>Low</td>
                    </tr>
                    <tr>
                        <td>May 14th, 2020</td>
                        <td>Cardio</td>
                        <td>65 minutes</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>May 15th, 2020</td>
                        <td>Cardio</td>
                        <td>50 minutes</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>May 16th, 2020</td>
                        <td>Weightlifting</td>
                        <td>68 minutes</td>
                        <td>Low</td>
                    </tr>
                    <tr>
                        <td>May 17th, 2020</td>
                        <td>Weightlifting</td>
                        <td>56 minutes</td>
                        <td>Medium</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
        )
    }
}

export default withRouter(Dashboard)

function Line() {
    const eData = [
        [new Date('5/10/2020'), 60],
        [new Date('5/11/2020'), 65],
        [new Date('5/12/2020'), 60],
        [new Date('5/13/2020'), 55],
        [new Date('5/14/2020'), 65],
        [new Date('5/15/2020'), 50],
        [new Date('5/16/2020'), 68],
        [new Date('5/17/2020'), 56],
    ]
    const nData = [
        [new Date('5/10/2020'), 2850],
        [new Date('5/11/2020'), 2862],
        [new Date('5/12/2020'), 2900],
        [new Date('5/13/2020'), 2848],
        [new Date('5/14/2020'), 2844],
        [new Date('5/15/2020'), 2860],
        [new Date('5/16/2020'), 2880],
        [new Date('5/17/2020'), 2911],
    ]
    const exerciseData = React.useMemo(
        () => [
            {
                label: 'Daily Exercises in minutes',
                data: eData
            }
        ],
        []
    )
    const nutritionData = React.useMemo(
        () => [
            {
                label: 'Nutrition',
                data: nData
            }
        ],
        []
    )
    const exerciseAxes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    const nutritionAxes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <Row>
            <div
                style={{
                    width: '250px',
                    height: '220px',
                    padding: '0 .5rem',
                    borderRadius: '5px',
                    background: 'rgba(0, 27, 45, 0.9)',
                }}
                className="mr-5"
            >
                <div
                    style={{
                        width: '200px',
                        height: 'auto',
                        padding: '1rem .5rem 0 .5rem',
                    }}
                >
                    <p className="text-white text-center">Daily Exercise in minutes</p>
                </div>
                <div
                    style={{
                        width: '240px',
                        height: '140px',
                        padding: '.5rem 1rem 0 0',
                    }}
                >
                    <Chart data={exerciseData} axes={exerciseAxes} tooltip dark />
                </div>
            </div>
            <div
                style={{
                    width: '250px',
                    height: '220px',
                    padding: '0 .5rem',
                    borderRadius: '5px',
                    background: 'rgba(0, 27, 45, 0.9)',
                }}
            >
                <div
                    style={{
                        width: '200px',
                        height: 'auto',
                        padding: '1rem .5rem 0 .5rem',
                    }}
                >
                    <p className="text-white text-center">Daily Caloric Intake</p>
                </div>
                <div
                    style={{
                        width: '240px',
                        height: '140px',
                        padding: '.5rem 1rem 0 0',
                    }}
                >
                    <Chart data={nutritionData} axes={nutritionAxes} tooltip dark />
                </div>
            </div>
        </Row>
    )
}