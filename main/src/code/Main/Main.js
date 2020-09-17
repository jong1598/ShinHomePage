import React, { PureComponent } from 'react';
import { MainContainer } from './'
import { Header } from '../Common'

class Main extends PureComponent {

    constructor(props) {
        super(props)

        this.header = React.createRef()
        this.mainContainer = React.createRef()

        this.state = {
            isDark: true
        }
    }

    callbackFunction = {
        setIsDark: (isDark) => {
            this.setState({ isDark })
            if(isDark === true) document.getElementById('body').style.background = '#000000'
            else document.getElementById('body').style.background = '#ffffff'
        },
        resetIndex: () => {
            this.header.current.setState({selected_Index: ''})      //헤더 select 리셋
            this.mainContainer.current.navigation.current.setState({selected_Index: ''})      //네비게이션 select 리셋
        }
    }

    render() {
        const { isDark } = this.state

        return (
            <div className="App">
                <div className='Main'>
                    <Header isDark={isDark} callbackFunction={this.callbackFunction} ref={this.header} />
                    <MainContainer isDark={isDark} ref={this.mainContainer} />
                </div>
            </div>
        )
    }
}

export default Main