import React from 'react';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ color: "white" }}>
                <div class="row">
                    <div class="col-sm-3" />
                    <div class="col-sm-6">
                        <h1>{this.props.name}</h1>
                        <img style={styles.image} src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/56985488_10215927019861174_2868957154939764736_o.jpg?_nc_cat=102&_nc_ohc=gq2HnBrjrJsAQkh9bjkl6yMvbvyJdpbPzohu2B8_KTSH4cAs9932FeKJQ&_nc_ht=scontent-iad3-1.xx&oh=2e4fb53479114f503d1144de91c676b0&oe=5E8335FF" />
                        <h5>{this.props.disclaimer}</h5>
                    </div>
                    <div class="col-sm-3" />
                </div>
                <button style={{ marginBottom:"25px" , marginTop: "25px" }} type="button" class="btn btn-success" onClick={this.props.setMain}>TAKE QUIZ NOW!</button>
            </div>
        )
    }
}

const styles = {
    image: {
        marginBottom: "25px",
        width: "660px",
        height: "auto"
    }
}