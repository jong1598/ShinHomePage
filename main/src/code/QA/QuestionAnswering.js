import React,{ PureComponent } from "react";
import { QuestionAnsweringContent } from './'
import { Header } from '../Common'

class QuestionAnswering extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()
        this.header = React.createRef()
        this.QuestionAnsweringContent = React.createRef()

        this.state = {
        }
    }


    render() {
        const { isDark, callbackFunction, selected_Index } = this.props

        return (
            <div className="App">
                <div className='Main'>
                    <Header isDark={isDark} callbackFunction={callbackFunction} ref={this.header} selected_Index={selected_Index} />
                    <QuestionAnsweringContent isDark={isDark} ref={this.QuestionAnsweringContent} />
                </div>
            </div>
        )
    }
}
export default QuestionAnswering