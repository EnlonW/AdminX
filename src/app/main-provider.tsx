import { NConfigProvider, NDialogProvider, NMessageProvider, NModalProvider, NNotificationProvider } from "naive-ui";
import { defineComponent, h } from "vue";

export default defineComponent(
  (props, { slots }) => {
    const Providers = [NConfigProvider, NModalProvider, NDialogProvider, NMessageProvider, NNotificationProvider]
    return () => Providers.reduceRight((prev, component) => {
      if (component === NConfigProvider) {
        return h(component, {}, { default: () => prev })
      }
      return h(component, null, { default: () => prev })
    }, h(slots?.default || 'div'))
  },
  { name: 'MainProvider' }
)
