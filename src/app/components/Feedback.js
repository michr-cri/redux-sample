import React from 'react';

class Feedback extends React.Component {

    render() {
        let feedbackTypeClass = this.props.feedback.type === 'error' ? 'error-msg': 'warning-msg';
        if (this.props.feedback) {
            return (
                <div id="divFeedbackBlock" className={feedbackTypeClass}>
                    <h4 id="h4Title">{this.props.feedback.title}</h4>
                    <p id="pMessage">{this.props.feedback.message}</p>
                </div>
            );
        }
    }
}

export default Feedback;
