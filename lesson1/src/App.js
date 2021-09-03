import React from 'react';

class App extends React.Component {
    state = {
        clicks: 1,
    }

    inc = () => {
        const { clicks } = this.state;

        this.setState({ clicks: clicks + 1 })
    }

    render() {
        const { clicks } = this.state;

        return (
            <div>
                <header>
                    header
                </header>
                <main>
                    <span onClick={() => this.inc}>
                        { clicks }
                    </span>
                </main>
                <footer>
                    footer
                </footer>
            </div>
        )
    }
}

export default App;
