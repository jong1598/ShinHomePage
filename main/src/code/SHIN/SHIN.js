import React,{ PureComponent } from "react";
import { SHINContent } from './'
import { Header } from '../Common'

class SHIN extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()
        this.header = React.createRef()
        this.SHINContent = React.createRef()

        this.state = {
        }
    }



    render() {
        const { isDark, callbackFunction, selected_Index } = this.props

        return (
            <div className="App">
                <div className='Main'>
                    <Header isDark={isDark} callbackFunction={callbackFunction} ref={this.header} selected_Index={selected_Index} />
                    <SHINContent isDark={isDark} ref={this.SHINContent} />
                </div>
            </div>
        )
    }
}
export default SHIN