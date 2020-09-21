import React,{ PureComponent } from "react";

class HomeContent extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()

        this.state = {
            
        }
    }


    render() {
        const { isDark } = this.props
        return (
            <React.Fragment>
                <div className={isDark ? 'Home-Dark' : 'Home-Bright'} >
                    <div>
                        Home    
                    </div>
                    <div id='scroll' className='scroll' style={{ height: '4000px' }}></div>
                </div>
            </React.Fragment>
        )
    }
}
export default HomeContent