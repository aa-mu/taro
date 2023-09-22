import {Component} from 'react';
import {View, Text} from '@tarojs/components';
definePageConfig({
  navigationBarTitleText: '消息',
});
export default class Message extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="Message">
        <Text>Message</Text>
      </View>
    );
  }
}
