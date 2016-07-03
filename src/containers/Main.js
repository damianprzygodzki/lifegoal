import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './styles.css';

import GoalForm from '../components/GoalForm'
import Goal from '../components/Goal'

class Main extends Component {
    constructor(props){
        super(props)
    }
    renderGoalPath = () => {
        const {goalPath} = this.props

        return goalPath.subGoals.map((goal) => <Goal goal={goal.value} key={goal.id} subGoal />)
    }
    render() {
        const {goalPath} = this.props

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h1 className="text-xs-center m-b-3 m-t-3 text-danger">Define your goal!</h1>
                            <p className="text-xs-center" >You are here now</p>
                            <p className="text-xs-center" >X</p>
                            {this.renderGoalPath()}
                            <Goal goal={goalPath.mainGoal} />

                            <GoalForm subGoal={!goalPath.mainGoal} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    goalPath: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { goalStateHandler } = state
    const {
        goalPath
    } = goalStateHandler || {
        goalPath: {}
    }
    return {
        goalPath
    }
}

Main = connect(mapStateToProps)(Main)

export default Main
