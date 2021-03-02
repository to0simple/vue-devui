import StatusDemoComponent from './status-demo'
import DevUIApiComponent from '../../shared/devui-api/devui-api'

const routes = [
  { path: '',  redirectTo: 'demo' },
  { path: 'demo', component: StatusDemoComponent},
  { path: 'api', component: DevUIApiComponent, meta: {
    'zh-cn': '../doc/api-cn.md',
    'en-us': '../doc/api-en.md'
  }}
]

export default routes