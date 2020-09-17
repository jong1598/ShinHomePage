import React,{ PureComponent } from "react";

class ShinListItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isHover: false
        }
    }



    /**
     * 버튼 위로 마우스커서가 들어왔을때
     */
    onMouseEnter = () => {
        this.setState({ isHover: true })
    }

    /**
     * 버튼 위에서 마우스커서가 나갔을때
     */
    onMouseLeave = () => {
        this.setState({ isHover: false })
    }


    render() {
        const { isHover } = this.state
        const { hoverStyle, style } = this.props
        let style_in = { ...style }
        if(isHover === true) style_in = {...style_in, ...hoverStyle}

        return (
            <li className={'NavigationListItem'}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                style={style_in}
            >
                {this.props.children}
            </li>
        )
    }
}
export default ShinListItem