import React from 'react';
import NextPrevButton from './NextPrevButtons';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            selectedKey: null,
        }
    }

    componentDidMount() {
        // scroll to top
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{ color: "white" }}>
                <div class="row">
                    <div class="col-sm-3" />
                    <div class="col-sm-6">
                        <h1>{this.props.q.title}</h1>
                        <h3>{this.props.q.question}</h3>
                    </div>
                    <div class="col-sm-3" />
                </div>
                {this.createCheckboxes(this.props.q.choices)}
            </div>
        )
    }

    createCheckboxes = (choices_obj) => {
        let buttons = []
        let keys = Object.keys(choices_obj)
        for (let key of keys) {
            let value = choices_obj[key]

            buttons.push(
                <div className="radio">
                    <label>
                        <input type="radio" value={value} name={key}
                            checked={this.state.selectedOption === value}
                            onChange={this.handleOptionChange} />
                        {" " + value}
                    </label>
                </div>
            )
        }

        return (
            <div>
                <form style={styles.checkboxes}>
                    <div class="row">
                        <div class="col-sm-3" />
                        <div style={styles.boxDiv} class="col-sm-6">
                            {buttons}
                        </div>
                        <div class="col-sm-3" />

                    </div>
                </form>

                <NextPrevButton
                    nextQuestion={this.nextQuestion}
                    prevQuestion={this.prevQuestion}
                    isFinalQuestion={this.props.isFinalQuestion}
                    calculateScores={this.props.calculateScores} />
            </div>

        )

    }

    handleOptionChange = (changeEvent) => {
        console.log(changeEvent.target);
        this.setState({
            selectedOption: changeEvent.target.value,
            selectedKey: changeEvent.target.name
        });
    }

    /**
     * nextQuestion should only increment if selectedOption exist
     */
    nextQuestion = () => {
        if (!this.state.selectedOption) {
            alert("You must select an option to continue");
            return;
        }

        console.log(this.props.q.rank);
        console.log(this.state.selectedKey);
        // pass in the specific rank based on key (A, B, C, or D)
        this.props.nextQuestion(this.props.q.rank[this.state.selectedKey]);
    }

    prevQuestion = () => {
        this.props.prevQuestion()
    }
}

const styles = {
    checkboxes: {
        "textAlign": "left",
    },
    radioInput: {
        "verticalAlign": "middle",
        "margin": "0px"
    },
    boxDiv: {
        "margin": "100px"
    }
}