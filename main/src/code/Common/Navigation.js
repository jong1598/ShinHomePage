import React,{ PureComponent } from "react";
import { ShinButton, ShinListItem } from "../Component";
import { IsNullOrEmpty } from "../Library/DataFunction";

class Navigation extends PureComponent {
    constructor(props) {
        super(props)

        this.buttonStyle = {
            cursor: "pointer",
            borderRadius: '0px',
            borderWidth: '0px 0px 3px',
            borderStyle: 'none none solid',
            borderTopColor: 'initial',
            borderRightColor: 'initial',
            borderBottomColor: 'transparent',
            borderLeftColor: 'initial',
            width: '100%',
            background: 'transparent',
            color: 'inherit',
            fontSize: '15px',
            paddingLeft: '20px',
            paddingTop: '8px',
            paddingBottom: '8px',
            textDecoration: 'none',
            textAlign: 'left',
            outline: 0
        }
        this.labelStyle = {
            display:'inherit',
            alignItems: 'inherit',
            fontFamily: '"Helvetica", "Arial"',
            fontWeight: 100
        }
        this.state = {
            navigateList: [
                {
                    index: 'Introduction_button', label: 'Introduction',
                    list: [
                        { index: 'Project', label: 'Project', href: '#/Project'},
                        { index: 'Portfolio', label: 'Portfolio', href: '#/Portfolio' },
                        { index: 'Aboutas', label: 'About as', href: '#/Aboutas' },
                    ]
                },
                {
                    index: 'SHIN_button', label: 'S H I N',
                    list: [
                        {
                            index: 'Component_button', label: 'Component',
                            list: [
                                { index: 'Button', label: 'Button', href: '#/Component/Button' },
                                { index: 'TextField', label: 'Text Field', href: '#/Component/TextField' },
                                { index: 'CheckBox', label: 'Check Box', href: '#/Component/CheckBox' },
                                { index: 'Radio', label: 'Radio', href: '#/Component/Radio' },
                            ]
                        },
                        {
                            index: 'Dialog_button', label: 'Dialog',
                            list: [
                                { index: 'AlertDialog', label: 'Alert Dialog', href: '#/Dialog/AlertDialog' },
                                { index: 'ConfirmDialog', label: 'Confirm Dialog', href: '#/Dialog/ConfirmDialog' },
                            ]
                        }
                    ]
                },
                { index: 'started6', label: 'Getting Started6', href: '#/started6' }
            ],
            selected_Index: '',
            selected_Label: '',
            selected_Button: []
        }
    }

    getNavigationList = (navigateList) => {
        const { selected_Index, selected_Button, selected_Label } = this.state
        const { isDark } = this.props
        let list = []

        for (let i = 0; i < navigateList.length; i++) {
            let extraStyle = {}
            if(navigateList[i]['label'].includes('button')){

            }else if(selected_Label === navigateList[i]['label']){
                extraStyle = {color: '#cc22dd'}
            }
            

            list.push(
                <ShinListItem
                    hoverStyle={{background: isDark ? 'rgba(255, 255, 255, 0.12)' : '#bbbbbb'}}
                >
                    <ShinButton
                        onClick={this.onClick}
                        index={navigateList[i]['index']}
                        label={navigateList[i]['label']}
                        labelStyle={this.labelStyle}
                        style={{ ...this.buttonStyle, ...extraStyle }}
                        href={navigateList[i]['href']}
                    />
                </ShinListItem>
            )

            //버튼이 클릭되어진 상태일떄 하위 리스트도 보여주기
            if(navigateList[i]['index'].includes('button') && selected_Button.includes(navigateList[i]['index'])){
                for(let j = 0; j < navigateList[i]['list'].length; j++){
                    let extraStyle2 = {}
                    if(selected_Label === navigateList[i]['list'][j]['label']){
                        extraStyle2 = {color: '#cc22dd'}
                    }
                    list.push(
                        <ShinListItem
                            hoverStyle={{background: isDark ? 'rgba(255, 255, 255, 0.12)' : '#bbbbbb'}}
                        >
                            <ShinButton
                                onClick={this.onClick}
                                index={navigateList[i]['list'][j]['index']}
                                label={navigateList[i]['list'][j]['label']}
                                labelStyle={this.labelStyle}
                                style={{ ...this.buttonStyle, ...extraStyle2, paddingLeft: '50px', fontSize: '12px' }}
                                href={navigateList[i]['list'][j]['href']}
                            />
                        </ShinListItem>
                    )
                }
            }
        }
        return list
    }

    creact_button_list = (list) => {

        return list
    }

    onClick = (inner_props) => {
        if (!IsNullOrEmpty(inner_props['index'])) {
            let selected_Button = this.state.selected_Button
            let selected_Index = inner_props['index']
            let selected_Label = inner_props['label']
            if(inner_props['index'].includes('button')){
                if(selected_Button.includes(inner_props['index'])){     //이미 열어진 상태니까 닫기
                    selected_Button.splice(selected_Button.indexOf(inner_props['index']), 1)
                    selected_Label = this.state.selected_Label
                    selected_Index = ''
                }else{     //이미 닫혀진 상태니까 열기
                    selected_Button.push(inner_props['index'])
                    selected_Index = inner_props['index']
                    selected_Label = this.state.selected_Label
                }
            }
            console.log(selected_Label)
            this.setState({ selected_Index, selected_Button, selected_Label })
        }
    }

    
    render() {
        const { navigateList } = this.state
        const { isDark } = this.props
        return (
            <div className={isDark ? 'Main-Navigation-Dark' : 'Main-Navigation-Bright'} >
                <ul style={{paddingLeft:'0px'}}>
                {this.getNavigationList(navigateList)}
                </ul>
            </div>
        )
    }

}
export default Navigation