import React,{ PureComponent } from "react";
import { Navigation, PageTable} from '../Common'

class SHINContent extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()

        this.state = {
            navigateList:  [
                { index: 'QuestionAnswering', label: 'Q/A', href: '#/QuestionAnswering' }
            ]
        }
    }


    render() {
        const { navigateList } = this.state
        const { isDark } = this.props
        return (
            <React.Fragment>
                <Navigation isDark={isDark} ref={this.navigation} navigateList={navigateList} selected_Index={'QuestionAnswering'} selected_Label={'Q/A'} />
                <div className={isDark ? 'Container-Dark' : 'Container-Bright'} >test</div>
                <PageTable isDark={isDark} />
            </React.Fragment>
        )
    }
}
export default SHINContent