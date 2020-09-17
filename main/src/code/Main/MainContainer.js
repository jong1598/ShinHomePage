import React,{ PureComponent } from "react";
import { Navigation, PageTable} from '../Common'

class MainContainer extends PureComponent {
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
                <Navigation isDark={isDark} ref={this.navigation} />
                <div className={isDark ? 'Main-Container-Dark' : 'Main-Container-Bright'} >test</div>
                <PageTable isDark={isDark} />
            </React.Fragment>
        )
    }
}
export default MainContainer