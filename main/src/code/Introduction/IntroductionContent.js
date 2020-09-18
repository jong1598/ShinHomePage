import React,{ PureComponent } from "react";
import { Navigation, PageTable} from '../Common'

class IntroductionContent extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()

        this.state = {
            navigateList:  [
                {
                    index: 'Introduction_button', label: 'Introduction',
                    list: [
                        { index: 'Project', label: 'Project', href: '#/Introduction/Project'},
                        { index: 'Portfolio', label: 'Portfolio', href: '#/Introduction/Portfolio' },
                        { index: 'Aboutas', label: 'About as', href: '#/Introduction/Aboutas' },
                    ]
                }
            ]
        }
    }


    render() {
        const { navigateList } = this.state
        const { isDark } = this.props
        return (
            <React.Fragment>
                <Navigation isDark={isDark} ref={this.navigation} navigateList={navigateList} />
                <div className={isDark ? 'Container-Dark' : 'Container-Bright'} >test</div>
                <PageTable isDark={isDark} />
            </React.Fragment>
        )
    }
}
export default IntroductionContent