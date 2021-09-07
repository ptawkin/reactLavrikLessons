import React from 'react';

class CounterClass extends React.Component {
    state = {
        clicks: 0,
    }

    inc = () => {
        let { clicks } = this.state;

        this.setState({ clicks: clicks + 1 })
    }

    render() {
        const { clicks } = this.state;

        return (
            <span onClick={() => this.inc}>
                { clicks }
            </span>
        )
    }
}

export default CounterClass;
