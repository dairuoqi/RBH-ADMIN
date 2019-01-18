import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/demo',
  name: 'demo',
  meta,
  redirect: { name: 'monitor' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'rabbitMq', name: `${pre}rabbitMq`, component: () => import('@/pages/demo/rabbitMq'), meta: { ...meta, title: 'RabbitMq' } },
    { path: 'kibana', name: `${pre}kibana`, component: () => import('@/pages/demo/kibana'), meta: { ...meta, title: 'Kibana' } },
    { path: 'druid', name: `${pre}druid`, component: () => import('@/pages/demo/druid'), meta: { ...meta, title: 'Druid' } }
  ])('demo-')
}
