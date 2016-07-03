import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {goalInputChanged, mainGoalSubmitted, subGoalSubmitted} from '../actions/GoalActions';

class GoalForm extends Component {
    constructor(props) {
        super(props)
    }
    onGoalChange = (e) => {
        e.preventDefault()
        this.props.dispatch(goalInputChanged(this.goalInput.value))
    }
    onGoalSubmit = (e) => {
        e.preventDefault()
        if(this.props.subGoal){
            this.props.dispatch(mainGoalSubmitted(this.goalInput.value))
        }else{
            this.props.dispatch(subGoalSubmitted(this.goalInput.value))
        }
    }
    render() {
        const {goalInput} = this.props
        return (
            <div>
                <div className="form-group">
                    <input onChange={this.onGoalChange} value={goalInput} ref={(c) => this.goalInput = c} className="form-control" />
                </div>
                <button className="btn btn-primary btn-block" onClick={this.onGoalSubmit}>Ok</button>
            </div>
        );
    }
}

GoalForm.propTypes = {
    goalInput: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { goalStateHandler } = state
    const {
        goalInput,
    } = goalStateHandler || {
        goalInput: ""
    }
    return {
        goalInput
    }
}

GoalForm = connect(mapStateToProps)(GoalForm)

export default GoalForm
