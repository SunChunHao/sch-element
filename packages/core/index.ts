import { makeInstaller } from '@sch-element/utils'
import components from './components'
import '@sch-element/theme/index.css'

/**
 * 提供一个installer 使用者可以通过vue.use()方式使用组件框架
 */
const installer = makeInstaller(components);
export * from '@sch-element/components'
export default installer