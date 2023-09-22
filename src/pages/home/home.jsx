import {Component} from 'react';
import {View, Text} from '@tarojs/components';
definePageConfig({
  navigationBarTitleText: '首页',
});
export default class Active extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="Home">
        <Text>Home</Text>
      </View>
    );
  }
}
