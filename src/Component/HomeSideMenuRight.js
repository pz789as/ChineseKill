/**
 * Created by tangweishu on 16/11/16.
 */

import React, {Component, PropTypes} from 'react'
import {View,Text, StyleSheet, Animated} from 'react-native'
import PanView from '../UserInfo/PanView'
import PanButton from '../UserInfo/PanButton'
import {ScreenWidth,ScreenHeight,MinUnit,MinWidth,IconSize,UtilStyles} from '../AppStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HomeSideMenuRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuAnim:new Animated.Value(0),
        };
    }
    static propTypes = {
        onCancel:React.PropTypes.func.isRequired,
        sideMenuAnim:React.PropTypes.object,
    };
    static defaultProps = {

    };     

    render(){
        const width = this.props.sideMenuAnim.interpolate({
            inputRange:[0,1],
            outputRange:[0,ScreenWidth*0.25]
        })
        return (
            <PanView name = "HomeSideMenuLeft" style={styles.container} >
                <Animated.View style={[styles.content,UtilStyles.grayBackColor,{width}]}>
                    {this.renderTitle()}
                </Animated.View>
            </PanView>
        );
    }
    _onCloseSideMenu = ()=>{       
        this.props.onCancel();
    }
    renderTitle = ()=>{
        return(
            <View style={[styles.menuTitleView,UtilStyles.bottomLine]}>
                <View />
                <PanButton name="btnMenuLeftBack" onPress={this._onCloseSideMenu.bind(this)}>
                    <Icon name="angle-right" size={IconSize}/>
                </PanButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        right:0,
    },
    content:{
        width:ScreenWidth*0.25,
        height:ScreenHeight,
        alignItems:'center',
    },
    menuTitleView:{
        width:ScreenWidth*0.25,
        flexDirection: 'row',
        height: MinUnit * 6,
        paddingHorizontal: MinUnit * 2,
        justifyContent: 'space-between',
        alignItems: 'center',

    },   
});