import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'


class ExerciseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async() => {
        this.setState({ isLoading: true })

        await api.getAllExercises().then(exercises => {
            this.setState({
                exercises: exercises.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { exercises, isLoading } = this.state
        console.log('TCL: ExerciseList -> render -> exercises', exercises)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Length',
                accessor: 'length',
                filterable: true,
            },
            {
                Header: 'Intensity',
                accessor: 'intensity',
                filterable: true,
            }
        ]

        let showTable = true
        if (!exercises.length) {
            showTable = false
        }

        return (
        <div>
            {showTable && (
                <ReactTable
                    data={exercises}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            )}
        </div>
        )
    }
}

export default ExerciseList
