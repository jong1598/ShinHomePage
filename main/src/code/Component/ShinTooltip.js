import React, { PureComponent } from 'react';
import ShinPotal from './ShinPotal';

class Tooltip extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };

        this.width = props.width || this.props.text.length * 10;
        this.space = props.space || 16;

        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
    }

    showTooltip() {
        const style = { width: this.width };
        const dimensions = this.el.getBoundingClientRect(); 

        style.left = (dimensions.left + (dimensions.width / 2)) - (this.width / 2);
        style.left = Math.max(this.space, style.left); 
        style.left = Math.min(style.left, window.outerWidth - this.width - this.space); 
        if (dimensions.top < window.innerHeight / 2) { 
            style.top = dimensions.top + dimensions.height + this.space;
        } else {
            style.bottom = (window.innerHeight - dimensions.top) + this.space;
        }

        this.setState({
            visible: true,
            style,
        });
    }

    hideTooltip() {
        this.setState({ visible: false });
    }

    render() {

        const { style } = this.state
        const { tooltipStyle } = this.props
        let style_in = { ...style, ...tooltipStyle }

        return (
            <span 
                onMouseOver={this.showTooltip}
                onMouseOut={this.hideTooltip}
                className="tooltip-trigger-text"
                ref={el => this.el = el}
            >
                {this.props.children}

                {this.state.visible && (
                    <ShinPotal>
                        <div
                            className="tooltip-body"
                            style={style_in}
                        >
                            {this.props.text}
                        </div>
                    </ShinPotal>
                )}
            </span>
        );
    }
}

export default Tooltip