
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]): Plugin {
  return (app: App) => components.map(c => app.use(c));
}

export const withInstall = <T>(component: T): SFCWithInstall<T> => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin)
  }
  return component as SFCWithInstall<T>;
}


