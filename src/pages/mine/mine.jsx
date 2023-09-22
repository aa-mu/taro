import {Component} from 'react';
import {View, Text} from '@tarojs/components';
definePageConfig({
  navigationBarTitleText: '我的',
});
export default class mine extends Component {
  
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="mine">
        <Text>mine</Text>
      </View>
    );
  }
}
