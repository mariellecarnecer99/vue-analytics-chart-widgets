import { registerPlugins } from '@/plugins'
import { VueAnalyticsChartWidgets } from './'

const MyComponentLibrary = {
  install: (app) => {
    app.component("VueAnalyticsChartWidgets", VueAnalyticsChartWidgets);
  },
};

export {registerPlugins, MyComponentLibrary, VueAnalyticsChartWidgets };