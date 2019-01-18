import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/mq',
  name: 'mq',
  meta,
  redirect: { name: 'mq' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: 'mq', component: () => import('@/pages/mq'), meta: { ...meta, title: '代码生成' } }
  ])('mq-')
}
