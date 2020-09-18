import React,{ PureComponent } from "react";
import { Navigation, PageTable} from '../Common'

class SHINContent extends PureComponent {
    constructor(props) {
        super(props)
        this.navigation = React.createRef()

        this.state = {
            navigateList:  [
                {
                    index: 'SHIN_button', label: 'S H I N',
                    list: [
                        {
                            index: 'Component_button', label: 'Component',
                            list: [
                                { index: 'Button', label: 'Button', href: '#/SHIN/Component/Button' },
                                { index: 'TextField', label: 'Text Field', href: '#/SHIN/Component/TextField' },
                                { index: 'CheckBox', label: 'Check Box', href: '#/SHIN/Component/CheckBox' },
                                { index: 'Radio', label: 'Radio', href: '#/SHIN/Component/Radio' },
                            ]
                        },
                        {
                            index: 'Dialog_button', label: 'Dialog',
                            list: [
                                { index: 'Alert', label: 'Alert', href: '#/SHIN/Dialog/Alert' },
                                { index: 'Confirm', label: 'Confirm', href: '#/SHIN/Dialog/Confirm' },
                            ]
                        }
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
export default SHINContent