import React, {PureComponent} from 'react';
import Header from './Header'

class Main extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    onClick = (selected_Index) => {
        this.setState({selected_Index})
    }

    render() {
        let headerMenus = [
            {label:'메뉴1', href:'/#/menu1'},
            {label:'메뉴2', href:'/#/menu2'},
            {label:'메뉴3', href:'/#/menu3'},
            {label:'메뉴4', href:'/#/menu4'},
            {label:'메뉴5', href:'/#/menu5'},
            {label:'메뉴6', href:'/#/menu6'},
            {label:'메뉴7', href:'/#/menu7'},
        ]

        return (
            <div className="App">
                <div className='Main'>
                    <Header buttons={headerMenus}/>
                </div>
            </div>
        )
    }
}

export default Main