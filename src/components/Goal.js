import React, { Component } from 'react';

class Goal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { subGoal } = this.props
        return (
            <div className={"text-xs-center " + (subGoal ? 'h4' : 'h1')}>
                {this.props.goal}
            </div>
        );
    }
}

export default Goal;
