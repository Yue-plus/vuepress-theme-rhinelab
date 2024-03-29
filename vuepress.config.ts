import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "vuepress-theme-rhinelab",
  description: "明日方舟莱茵生命阵营的 VuePress 主题，开发中……",

  theme: defaultTheme({
    navbar: [
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' },
      { text: '插件', link: '/plugin/' },
      { text: '参与开发', link: '/join/' },
    ],
    repo: 'Yue-plus/vuepress-theme-rhinelab',
    editLinkText: '编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    backToHome: '返回首页'
  }),
})