import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Table from 'react-bootstrap/Table'
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th colspan="2">Exercise</th>
                        <th colspan="4">Nutrition</th>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <th>Length</th>
                        <th>Intensity</th>
                        <th>Calories</th>
                        <th>Carbs</th>
                        <th>Protein</th>
                        <th>Fat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>May 10th, 2020</td>
                        <td>60 minutes</td>
                        <td>High</td>
                        <td>2800</td>
                        <td>100g</td>
                        <td>100g</td>
                        <td>50g</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
        )
    }
}

export default withRouter(Dashboard)
