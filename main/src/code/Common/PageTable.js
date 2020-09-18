import React,{ PureComponent } from "react";

class PageTable extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { isDark } = this.props
        return (
            <div className={isDark ? 'PageTable-Dark' : 'PageTable-Bright'} >PageTable</div>
        )
    }
}
export default PageTable