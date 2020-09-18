import React, { PureComponent } from 'react';
import { gitLogo, logo, moonLogo, sunLogo } from '../../Image';
import { ShinButton, ShinTooltip, ShinImageButton } from '../Component'
import { ToString, IsNullOrEmpty } from '../Library/DataFunction';

class Header extends PureComponent {

    constructor(props) {
        super(props)

        this.buttonStyle = {
            boxSizing: "border-box",
            cursor: "pointer",
            display: "inline-block",
            outline: "none",
            position: "relative",
            textAlign: "center",
            verticalAlign: "top",
            borderRadius: '0px',
            borderWidth: '0px 0px 3px',
            borderStyle: 'none none solid',
            borderTopColor: "initial",
            borderRightColor: "initial",
            borderBottomColor: 'transparent',      //rgb(86,86,86)
            borderLeftColor: "initial",
            background: "transparent",
            color: "inherit",
            textDecoration: "none",
            height: "60px"
        }

        this.labelStyle = {
            fontFamily: "Nanum Square",
            fontSize: '18px',
            lineHeight: '60px',
            padding: '0px 16px',
            textTransform: 'uppercase'
        }

        this.state = {
            selected_Index: props.selected_Index,
            headerMenus: [
                { index: '0', label: 'Home', href: '#/Home' },
                { index: '1', label: 'Introduction', href: '#/Introduction' },
                { index: '2', label: 'S H I N', href: '#/SHIN' },
                { index: '3', label: 'Q/A', href: '#/QuestionAnswering' }
            ]
        }
    }

    onClick = (inner_props) => {
        if (!IsNullOrEmpty(inner_props['index'])) {
            this.setState({ selected_Index: inner_props['index'] })
        }
    }

    onClick_brightLogo = () => {
        const { isDark } = this.props
        if (isDark === true) this.props.callbackFunction.setIsDark(false)
        else this.props.callbackFunction.setIsDark(true)

    }

    createButton = (buttons) => {
        const { isDark } = this.props

        let buttonComponents = []

        for (let i = 0; i < buttons.length; i++) {
            let index = ToString(i)
            let style = this.buttonStyle
            if (index === this.state.selected_Index) {
                style = { ...style, borderBottomColor: isDark ? 'rgb(186,186,186)' : 'rgb(86,86,86)' }
            }
            let hoverStyle = { ...style, background: isDark ? 'rgb(46,37,37)' : 'rgb(246,237,237)' }
            let labelStyle = this.labelStyle
            buttonComponents.push(
                <ShinButton href={buttons[i]['href']} index={buttons[i]['index']} style={style} hoverStyle={hoverStyle} labelStyle={labelStyle} label={buttons[i]['label']} onClick={this.onClick} />
            )
        }

        return buttonComponents
    }


    createLinkButton = () => {
        let linkComponents = []
        const { isDark } = this.props

        linkComponents.push(     //링크
            <ShinTooltip text='Toggle Blight/Dark' tooltipStyle={{ borderRadius: "50%", paddingTop: '20px' }}>
                <ShinImageButton
                    onClick={this.onClick_brightLogo}
                    style={{ ...this.buttonStyle, height: '42px', width: '38px',marginRight:'5px', paddingRight: '38px' }}
                    hoverStyle={{ ...this.buttonStyle, height: '42px', width: '38px',marginRight:'5px', paddingRight: '38px', background: isDark ? 'rgba(255, 255, 255, 0.12)' : '#bbbbbb', borderRadius: '50%' }}
                    image={isDark ? sunLogo : moonLogo}
                    imageStyle={{ display: 'inline-block', height: '30px', textAlign: 'center', verticalAlign: 'middle', background: isDark ? 'transparent' : '#333333', borderRadius: isDark ? '' : '50%', marginLeft: '1px' }}
                />
            </ShinTooltip>
        )

        linkComponents.push(     //링크
            <ShinTooltip text='Github Repository'tooltipStyle={{ borderRadius: "50%", paddingTop: '20px' }}>
                <ShinImageButton
                    href={"https://github.com/jong1598/ShinHomePage"}
                    style={{ ...this.buttonStyle, height: '43px', width: '44px', marginRight: '10px',  paddingRight: '38px'}}
                    hoverStyle={{ ...this.buttonStyle, height: '43px', width: '44px', marginRight: '10px', paddingRight: '38px', background: isDark ? 'rgba(255, 255, 255, 0.12)' : '#bbbbbb', borderRadius: '50%' }}
                    image={gitLogo}
                    imageStyle={{ display: 'inline-block', height: '30px', width: '30px', textAlign: 'center', verticalAlign: 'middle', borderRadius: isDark ? '' : '50%', marginTop: '5px', marginLeft: '7px' }}
                />
            </ShinTooltip>
        )

        return linkComponents
    }

    render() {
        const { headerMenus } = this.state
        const { isDark } = this.props

        let buttonComponents = this.createButton(headerMenus)
        let linkComponents = this.createLinkButton()

        return (
            <header className={isDark ? "Main-Header-Dark" : "Main-Header-Bright"}>
                <a href="#/" ><img className="Main-Header-Logo" src={logo} /></a>
                <h1 className="Main-Header-Text"><a href="#/" >SHIN</a></h1>
                <div className="Main-Header-Menu" >{buttonComponents}</div>
                <div className="Main-Header-Link">{linkComponents}</div>
            </header>
        )
    }
}

export default Header