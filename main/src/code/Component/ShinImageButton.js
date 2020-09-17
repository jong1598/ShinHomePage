import React, {PureComponent} from 'react';

class ShinImageButton extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isHover: false  //Hover상태값
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
            imageStyle,
            image,
            href,
            onClick
        } = this.props

        const { isHover } = this.state

        let buttonStyle = isHover ? hoverStyle : style

        return (
            href ?
                <a
                    href={href}
                    style={{ ...buttonStyle }}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <img
                        src={image}
                        style={{ ...imageStyle }}
                    />
                </a>
                :
                <button onClick={onClick}
                    style={{ ...buttonStyle }}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <img
                        src={image}
                        style={{ ...imageStyle }}
                    />
                </button>
        )
    }
}
export default ShinImageButton