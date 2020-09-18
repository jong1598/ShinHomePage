import React, { PureComponent } from 'react';
import { HomeContent } from '.'
import { Header } from '../Common'

class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.header = React.createRef()
        this.HomeContent = React.createRef()

        this.state = {
        }
    }

    render() {
        const { isDark, callbackFunction, selected_Index } = this.props

        return (
            <div className="App">
                <div className='Home'>
                    <Header isDark={isDark} callbackFunction={callbackFunction} ref={this.header} selected_Index={selected_Index} />
                    <HomeContent isDark={isDark} ref={this.HomeContent} />
                </div>
            </div>
        )
    }
}

export default Home