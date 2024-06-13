
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;


/**
 * 创建一个插件安装器函数。
 * 
 * 该函数的目的是为了简化多个插件的安装过程。它接收一个插件数组作为参数，
 * 返回一个函数，这个返回的函数被设计用于一个应用实例，它会依次安装传入的插件。
 * 
 * @param components 插件数组，包含需要安装的多个插件。
 * @returns 返回一个函数，该函数接受一个应用实例作为参数，并依次安装数组中的插件。
 */
export function makeInstaller(components: Plugin[]): Plugin {
  return (app: App) => components.map(c => app.use(c));
}


/**
 * 为组件添加install方法，使其可以作为Vue插件安装。
 * 
 * @param component 组件实例，可以是任何Vue组件。
 * @returns 返回一个具有install方法的组件，使其符合Vue插件的规范。
 */
export const withInstall = <T>(component: T): SFCWithInstall<T> => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name; // 这里的name对应组件defineOptions中的name
    app.component(name, component as Plugin)
  }
  return component as SFCWithInstall<T>;
}


