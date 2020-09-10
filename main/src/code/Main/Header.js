import React, {PureComponent} from 'react';
import logo from '../../Image/logo.png';
import gitLogo from '../../Image/gitLogo.png';
import {ShinButton} from '../Component'
import { ToString, IsNullOrEmpty } from '../Library/DataFunction';

class Header extends PureComponent {

    constructor(props) {
        super(props)

        this.buttonStyle = {
            boxSizing:"border-box",
            cursor: "pointer",
            display:"inline-block",
            outline: "none",
            position:"relative",
            textAlign:"center",
            verticalAlign:"top",
            borderRadius:'0px',
            borderWidth:'0px 0px 3px',
            borderStyle:'none none solid',
            borderTopColor: "initial",
            borderRightColor:"initial", 
            borderBottomColor:'transparent',      //rgb(86,86,86)
            borderLeftColor:"initial",
            background: "transparent",
            color: "rgb(74, 74, 74)",
            textDecoration: "none",
            height:"60px"
        }

        this.labelStyle = {
            fontFamily: "Nanum Square",
            fontSize:'18px',
            lineHeight:'60px',
            padding: '0px 16px',
            textTransform: 'uppercase'
        }

        this.state = {
            selected_Index: ''
        }
    }

    onClick = (inner_props) => {
        if(!IsNullOrEmpty(inner_props['index'])){
            this.setState({ selected_Index: inner_props['index'] })
        }
    }

    createButton = (buttons) => {

        let buttonComponents = []

        for(let i = 0; i < buttons.length; i++){
            let index = ToString(i)
            let style = this.buttonStyle
            if(index === this.state.selected_Index){
                style = { ...style, borderBottomColor: 'rgb(86,86,86)' }
            }
            let hoverStyle = { ...style, background: 'rgb(246,237,237)' }
            let labelStyle = this.labelStyle
            buttonComponents.push(<ShinButton href={buttons[i]['href']} index={index} style={style} hoverStyle={hoverStyle} labelStyle={labelStyle} label={buttons[i]['label']} onClick={this.onClick} />)
        }
        return buttonComponents
    }

    
    createGitLink = () => {
        let gitLinkComponents = []
        gitLinkComponents.push(     //링크
            <a href={"https://github.com/jong1598/ShinHomePage"} style={{...this.buttonStyle, 'height': '38px'}}>
                <img src={gitLogo} style={{ display: 'inline-block', 'height': '38px', 'width': '38px', textAlign: 'center', verticalAlign: 'middle' }} />
            </a>
        )

        return gitLinkComponents
    }

    render() {
        const { buttons } = this.props


        let buttonComponents = this.createButton(buttons)
        let gitLinkComponents = this.createGitLink()

        return (
            <header className="Main-Header">
                <img className="Main-Header-Logo" src={logo} />
                <h1 className="Main-Header-Text"><a href="#/Main">SHIN</a></h1>
                <div className="Main-Header-Menu" >{buttonComponents}</div>
                <div className="Main-Header-GitLink">{gitLinkComponents}</div>
            </header>
        )
    }
}

export default Header