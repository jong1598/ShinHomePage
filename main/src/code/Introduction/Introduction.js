import React,{ PureComponent } from "react";
import { IntroductionContent } from './'
import { Header } from '../Common'

class Introduction extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()
        this.header = React.createRef()
        this.introductionContent = React.createRef()

        this.state = {
        }
    }


    render() {
        const { isDark, callbackFunction, selected_Index } = this.props
        return (
            <div className="App">
                <div className='Main'>
                    <Header isDark={isDark} callbackFunction={callbackFunction} ref={this.header} selected_Index={selected_Index} />
                    <IntroductionContent isDark={isDark} ref={this.introductionContent} />
                </div>
            </div>
        )
    }
}
export default Introduction