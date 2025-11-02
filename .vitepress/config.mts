import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ColorMC启动器",
  description: "ColorMC启动器官方网站",
  base: '/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '功能介绍', link: '/features' },
      { text: '下载', link: '/download' },
      { text: '文档', link: '/guide/guide' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '常见问题', link: '/guide/faq' }
        ]
      },
      {
        text: '功能',
        items: [
          { text: '主要功能', link: '/features/main' },
          { text: '特色亮点', link: '/features/highlights' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Coloryr/ColorMC' }
    ],

    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: '此网站由冰晶石构建 | Copyright © 2025 ColorMC. All Rights Reserved.'
    }
  },
  appearance: true,
  lang: 'zh-CN',
  vite: {
    server: {
      fs: {
        allow: ['.', '../fonts']
      }
    }
  }
})