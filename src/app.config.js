export default defineAppConfig({
  pages: [
    'pages/home/home',
    'pages/active/active',
    'pages/message/message',
    'pages/mine/mine',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
        iconPath: '/static/navbar/home.png',
        selectedIconPath: '/static/navbar/home1.png',
      },
      {
        pagePath: 'pages/active/active',
        text: '文化',
        iconPath: '/static/navbar/active.png',
        selectedIconPath: '/static/navbar/active1.png',
      },
      {
        pagePath: 'pages/message/message',
        text: '消息',
        iconPath: '/static/navbar/message.png',
        selectedIconPath: '/static/navbar/message1.png',
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: '/static/navbar/mine.png',
        selectedIconPath: '/static/navbar/mine1.png',
      },
    ],
    color: '#9D9D9D',
    selectedColor: '#EC0808',
    backgroundColor: '#f7f7fa',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '白雪',
    navigationBarTextStyle: 'black',
  },
});
