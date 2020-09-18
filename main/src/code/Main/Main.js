import React, { PureComponent } from 'react';
import { MainContent } from './'

class Main extends PureComponent {

    constructor(props) {
        super(props)
        this.header = React.createRef()
        this.mainContent = React.createRef()

        this.state = {
        }
    }

    render() {
        const { isDark, callbackFunction } = this.props

        return (
            <div className="App">
                <div className='Main'>
                    <MainContent isDark={isDark} ref={this.mainContent} />
                </div>
            </div>
        )
    }
}

export default Main