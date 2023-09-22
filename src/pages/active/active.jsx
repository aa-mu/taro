import {Component} from 'react';
import {View, Text} from '@tarojs/components';
definePageConfig({
  navigationBarTitleText: '文化',
});
export default class Active extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="Active">
        <Text>Active</Text>
      </View>
    );
  }
}
