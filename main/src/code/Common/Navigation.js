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
            outline: 0,
            transition: 'background 0.4s'
        }
        this.labelStyle = {
            display:'inherit',
            alignItems: 'inherit',
            fontFamily: '"Helvetica", "Arial"',
            fontWeight: 100
        }
        this.state = {
            navigateList: props.navigateList ? props.navigateList : [],
            selected_Index: props.selected_Index,
            selected_Label: props.selected_Label,
            selected_Button: []
        }
    }

    getNavigationList = (navigateList) => {
        const { selected_Index, selected_Button, selected_Label } = this.state
        const { isDark } = this.props
        let list = []

        for (let i = 0; i < navigateList.length; i++) {
            let extraStyle = {}
            if(selected_Label === navigateList[i]['label']){
                extraStyle = {color: '#cc22dd'}
            }
            
            let isRipple = navigateList[i]['index'].includes('button') ? true : false
            list.push(
                <ShinListItem
                    hoverStyle={{ background: isDark ? 'rgba(255, 255, 255, 0.12)' : '#bbbbbb' }}
                >
                    <ShinButton
                        onClick={this.onClick}
                        index={navigateList[i]['index']}
                        label={navigateList[i]['label']}
                        labelStyle={this.labelStyle}
                        style={{ ...this.buttonStyle, ...extraStyle }}
                        href={navigateList[i]['href']}
                        isRipple={isRipple}
                        rippleProps={isRipple ? {duration: '850', color: 'rgba(255, 255, 255, 0.16)'} : undefined}
                    />
                </ShinListItem>
            )

            //버튼이 클릭되어진 상태일떄 하위 리스트도 보여주기
            if(navigateList[i]['index'].includes('button') && selected_Button.includes(navigateList[i]['index'])){
                let underList = navigateList[i]['list']
                list = this.creact_button_list(list, underList, selected_Label, isDark, selected_Button, 40)
            }
        }

        return list
    }

    creact_button_list = (list, underList, selected_Label, isDark, selected_Button, padding) => {
        for(let i = 0; i < underList.length; i++){
            let extraStyle2 = {}
            if(selected_Label === underList[i]['label']){
                extraStyle2 = {color: '#cc22dd'}
            }
            let isRipple = underList[i]['index'].includes('button') ? true : false
            list.push(
                <ShinListItem
                    hoverStyle={{background: isDark ? 'rgba(255, 255, 255, 0.12)' : '#bbbbbb'}}
                >
                    <ShinButton
                        onClick={this.onClick}
                        index={underList[i]['index']}
                        label={underList[i]['label']}
                        labelStyle={this.labelStyle}
                        style={{ ...this.buttonStyle, ...extraStyle2, paddingLeft: `${padding}px`, fontSize: '12px' }}
                        href={underList[i]['href']}
                        isRipple={isRipple}
                        rippleProps={isRipple ? {duration: '850', color: 'rgba(255, 255, 255, 0.16)'} : undefined}
                    />
                </ShinListItem>
            )
            if(underList[i]['index'].includes('button') && selected_Button.includes(underList[i]['index'])){
                let underList_in = underList[i]['list']
                let padding_in = padding + 40
                list = this.creact_button_list(list, underList_in, selected_Label, isDark, selected_Button, padding_in)
            }
        }
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
                    if (IsNullOrEmpty(this.state.selected_Index)) { //강제랜더링을 위해 사용
                        selected_Index = 'none'
                    } else {
                        selected_Index = ''
                    }
                } else {     //이미 닫혀진 상태니까 열기
                    selected_Button.push(inner_props['index'])
                    selected_Index = inner_props['index']
                    selected_Label = this.state.selected_Label
                }
            }
           this.setState({ selected_Index, selected_Button, selected_Label })
        }
    }

    
    render() {
        const { navigateList } = this.state
        const { isDark } = this.props
        return (
            <div className={isDark ? 'Navigation-Dark' : 'Navigation-Bright'} >
                <ul style={{paddingLeft:'0px'}}>
                {this.getNavigationList(navigateList)}
                </ul>
            </div>
        )
    }

}
export default Navigation