import React from 'react';

export default class MainPage extends React.Component {
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
                        <h3>{this.props.overview}</h3>
                        <img style={styles.image} src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12376349_10207856032633049_2591699898116468655_n.jpg?_nc_cat=111&_nc_ohc=-AHdcS-sVMMAQkX_sTcQrUWcWlEYCPmp5vtdiwJaS2fHbggNuwNIwrvtg&_nc_ht=scontent-iad3-1.xx&oh=b7f986994a617561221411b418a59786&oe=5E82FF16" className="rounded-circle" />
                    </div>
                    <div class="col-sm-3" />
                </div>
                <button style={{ marginBottom: "25px" }} type="button" class="btn btn-primary" onClick={this.props.setQuestion}>START QUIZ</button>
            </div>
        )
    }
}

const styles = {
    image: {
        marginBottom: "25px",
        width: "500px",
        height: "auto"
    }
}