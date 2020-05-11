import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
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

            <Form>
                <h5>Exercise</h5>
                <Form.Row>
                <Form.Group controlId="length">
                    <Form.Label>Length in minutes</Form.Label>
                    <Form.Control type="text" placeholder="60" />
                </Form.Group>
                <Form.Group controlId="intensity">
                    <Form.Label>Intesity</Form.Label>
                    <Form.Control as="select">
                        <option>Light</option>
                        <option>Moderate</option>
                        <option>Heavy</option>
                    </Form.Control>
                </Form.Group>
                </Form.Row>
                <h5>Nutrition</h5>
                <Form.Row>
                <Form.Group controlId="calories">
                    <Form.Label>Calories</Form.Label>
                    <Form.Control type="text" placeholder="2800" />
                </Form.Group>
                </Form.Row>
            </Form>
        </React.Fragment>
        )
    }
}

export default withRouter(Dashboard)
