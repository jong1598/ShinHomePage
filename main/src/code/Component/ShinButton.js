import React, {PureComponent} from 'react';

class ShinButton extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isHover: false  //Hover상태값
        }
    }

    /**
     * 버튼 클릭시 이벤트
     */
    onClick = () => {
        if(this.props.onClick){
            this.props.onClick(this.props)
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

        const {
            style,
            hoverStyle,
            labelStyle,
            label,
            href,
        } = this.props

        const { isHover } = this.state


        let labelComponent = label ? <span style={labelStyle}>{label}</span> : ''

        let buttonStyle = isHover ? hoverStyle : style

        return (
            href ? <a
                style={buttonStyle}
                href={href}
                ref='button'
                className='button'
                onClick={this.onClick}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}>
                {labelComponent}
            </a> :
                <button
                    ref='button'
                    className='button'
                    style={buttonStyle}
                    onClick={this.onClick}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}>
                    {labelComponent}
                </button>
        )
    }
}
export default ShinButton