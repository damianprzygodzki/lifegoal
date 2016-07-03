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
        const {goalInput, subGoal} = this.props
        return (
            <div className="text-xs-center form-inline m-t-3">
                <div className="form-group">
                    <div className="label">I want to </div>
                    <input
                        onChange={this.onGoalChange}
                        placeholder={subGoal ? "Type your main goal!" : "Type now waypoints to achieve goal!"}
                        value={goalInput}
                        ref={(c) => this.goalInput = c}
                        className="form-control m-r-1"
                    />
                </div>
                <button className="btn btn-primary-2 btn-lg" onClick={this.onGoalSubmit}>Do it!</button>
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
