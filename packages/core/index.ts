import { makeInstaller } from '@sch-element/utils'
import components from './components'
import '@sch-element/theme/index.css'

const installer = makeInstaller(components);
export * from '@sch-element/components'
export default installer