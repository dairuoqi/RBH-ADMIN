// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '系统监控',
    icon: 'folder-o',
    children: [
      { path: '/demo/rabbitMq', title: 'RabbitMq' },
      { path: '/demo/kibana', title: 'Kibana' },
      { path: '/demo/druid', title: 'Druid' }
    ]
  },
  { path: '/mq/index', title: '消息队列', icon: 'folder-o' }
]
