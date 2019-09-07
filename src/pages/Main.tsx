import React from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Color } from '../styles/Color';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../container/ScrollableTabBar';
import Assessments from '../container/Assessments';
import MyReviews from '../container/MyReviews';

const Main = () => {
  const renderOptionComponent = () => {
    return (
      <TouchableOpacity>
        <Image source={require('../../assets/menu.png')} style={{ width: 17, height: 18, tintColor: Color.white }} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.homespace}>
      <Header
				backgroundColor={Color.secondary}
				containerStyle={{borderBottomWidth:0}}
        centerComponent={{ text: 'G R O O T', style: { color: '#fff', fontSize: 17 } }}
        rightComponent={renderOptionComponent()}
      />
      <ScrollableTabView
        renderTabBar={() => <ScrollableTabBar style={styles.scrollStyle} tabStyle={styles.tabStyle} />}
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarInactiveTextColor={Color.semiTransparent}
        tabBarActiveTextColor={Color.white}
        tabBarUnderlineStyle={styles.underlineStyle}
        initialPage={0}
			>
				<Assessments key={'1'} tabLabel={'Assessments'} />
				<MyReviews key={'2'} tabLabel={'My Reviews'}/>
			</ScrollableTabView>
    </View>
  );
};

const styles = StyleSheet.create({
	tabStyle: {
    width: '100%'
	},
	homespace: {
    flex: 1,
    width: '100%',
    maxHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white
  },
  scrollStyle: {
    backgroundColor: Color.secondary,
    borderBottomWidth: 0,
    width: '100%',
    justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 18,
    fontWeight: 'normal'
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'transparent',
    borderRadius: 3
  }
})

export default Main;
