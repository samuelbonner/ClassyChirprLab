import React from "react";
import Timeline from "./Timeline";

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            meows: [],
            id: "",
            username: "",
            message: "",
            datestamp: "",
            timestamp: ""
        }
    }

    componentDidMount() {
        this.setState({
            meows: [
                {
                    id: "1",
                    username: "Mac",
                    message: "Meow World!",
                    datestamp: `${new Date("2021-06-30T18:31:00.000Z").toLocaleDateString()}`,
                    timestamp: `${new Date("2021-06-30T18:31:00.000Z").toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                },
                {
                    id: "2",
                    username: "Koot",
                    message: "Meow yourself, Mac!!",
                    datestamp: `${new Date("2021-06-30T18:33:00.000Z").toLocaleDateString()}`,
                    timestamp: `${new Date("2021-06-30T18:33:00.000Z").toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                },
                {
                    id: "3",
                    username: "Mac",
                    message: "BIRD ALERT! A robin near the left fence! #bigbird",
                    datestamp: `${new Date("2021-06-30T18:33:30.000Z").toLocaleDateString()}`,
                    timestamp: `${new Date("2021-06-30T18:33:30.000Z").toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                },
                {
                    id: "4",
                    username: "Koot",
                    message: "MEOW! Engaging tail-wag and deploying big eyes!",
                    datestamp: `${new Date("2021-06-30T18:34:00.000Z").toLocaleDateString()}`,
                    timestamp: `${new Date("2021-06-30T18:34:00.000Z").toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                },
            ]
        })
    }


    handleUsernameChange = (e) => this.setState({ username: e.target.value })
    handleMessageChange = (e) => this.setState({ message: e.target.value });
    handleClick = (e) => {
        e.preventDefault();
        let date = new Date()
        const newMeow = {
            username: this.state.username,
            message: this.state.message,
            datestamp: date.toLocaleDateString(),
            timestamp: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        const newArray = [...this.state.meows, newMeow]

        this.setState({ meows: newArray });
    }


    render() {

        return (
            <div className="d-flex row my-3">
                <form className="form-group col-md-10 mt-3 d-flex justify-content-center align-items-center">
                    <input
                        className="col-sm-2 m-2"
                        placeholder="Username"
                        value={this.username}
                        onChange={this.handleUsernameChange}
                    />
                    <input
                        className="col-sm-4 m-2"
                        placeholder="Message"
                        value={this.message}
                        onChange={this.handleMessageChange}
                    />
                    <button
                        className="btn btn-primary col-sm-2 m-2 mx-3 btn-sm"
                        onClick={this.handleClick}
                    >
                        Meow!
                    </button>
                </form>

                <div className="row col-10 m-auto justify-content-start align-content-start">{this.state.meows.slice(0).reverse().map(meow => <Timeline meow={meow} />)}</div>
            </div>
        );
    }
};

export default Input;