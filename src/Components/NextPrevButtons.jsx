import React from 'react';

export default class NextPrevButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{"textAlign": "center"}}>
                <button type="button" class="btn btn-danger" onClick={this.props.prevQuestion}>PREVIOUS</button>
                <div style={styles.divider} />
                {!this.props.isFinalQuestion ? 
                    <button type="button" class="btn btn-primary" onClick={this.props.nextQuestion}>NEXT</button> 
                    : 
                    <button type="button" class="btn btn-success" onClick={this.props.calculateScores}>SUBMIT</button> 
                }
            </div>
        )
    }
}

const styles = {
    divider: {
        width: "490px",
        height: "auto",
        display: "inline-block"
    }
}