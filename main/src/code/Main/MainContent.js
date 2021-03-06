import React,{ PureComponent } from "react";
import $ from 'jquery';
import { ToNumber } from "../Library/DataFunction";


class MainContent extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()

        this.state = {
            scroll_position: 0,
            scroll_height: 0

        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        const height = $('body').height();
        const scrollY = window.scrollY;
        this.setState({ scroll_height: height, scroll_position: scrollY })
    }

    createBtnComponent = () => {
        let component = []
        const { scroll_height, scroll_position } = this.state
        let percent = scroll_height !== 0 ? Math.floor(ToNumber(scroll_position / scroll_height) * 100) : 0
        let opacity1 = percent === 0 ? 1 : percent > 40 ? 0 : Math.abs((percent - 40) / 40)
        let opacity2 = (percent === 0 || percent < 30) ? 0 : percent < 50 ? Math.abs((percent - 30) / 20) : percent > 70 ? 0 :Math.abs((percent - 70) / 20)
        let opacity3 = (percent === 0 || percent < 60) ? 0 : Math.abs((percent - 60) / 19)
        component.push(
            <div style={{ opacity: opacity1 }}>
                <h1 className='startText'>T H I S</h1>
                <h1 className='startText'>T H I S</h1>
                <h1 className='startText'>T H I S</h1>
            </div>
        )
        component.push(
            <div style={{ opacity: opacity2 }}>
                <h1 className='startText'>I S</h1>
                <h1 className='startText'>I S</h1>
                <h1 className='startText'>I S</h1>
            </div>
        )
        component.push(
            <div style={{ opacity: opacity3 }}>
                <h1 className='startText'>S H I N</h1>
                <h1 className='startText'>S H I N</h1>
                <h1 className='startText'>S H I N</h1>
            </div>
        )


        return component
    }

    createScrollGuideComponent = () => {
        let component = []
        const { scroll_height, scroll_position } = this.state
        const { isDark } = this.props
        let percent = scroll_height !== 0 ? Math.floor(ToNumber(scroll_position / scroll_height) * 100) : 0
        let opacity = percent === 0 ? 1 : percent > 10 ? 0 : Math.abs((percent - 10) / 10)
        let bottom = percent === 0 ? '0px' : percent > 10 ? '0px' : `${Math.abs((percent/ 10) * 100)}px`
        component.push(
            <span class="scroll-guide" style={{opacity,bottom}}>
                <span class="scroll-guide-line" style={{background: isDark ? '#ffffff'  : '#852525'}}></span>
                <h1 className='startText' style={{fontSize:'12px', color: isDark ? '#ffffff'  : '#852525'}}>Scroll</h1>
                <h1 className='startText' style={{fontSize:'12px', color: isDark ? '#ffffff'  : '#852525'}}>Scroll</h1>
                <h1 className='startText' style={{fontSize:'12px', color: isDark ? '#ffffff'  : '#852525'}}>Scroll</h1>
            </span>
        )
        return component
    }

    render() {
        const { isDark } = this.props
        let scrollHeight = window.outerHeight * 4

        let btnComponent = this.createBtnComponent()
        let scrollGuideComponent = this.createScrollGuideComponent()

        return (
            <React.Fragment>
                <div className={isDark ? 'Main-Container-Dark' : 'Main-Container-Bright'} >
                    <div className='layer'>
                        <a className='startBtn' href='#/Home' >
                            {btnComponent}
                        </a>
                    </div>
                    {scrollGuideComponent}
                    <div className='copyright'>— © Copyright 2020 by ShinJongJin. All rights reserved.</div>
                </div>
                <div id='scroll' className='scroll' style={{ height: scrollHeight }}></div>
            </React.Fragment>
        )
    }
}
export default MainContent