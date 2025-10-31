import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PCL社区版",
  description: "PCL社区版启动器非官方网站",
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '功能介绍', link: '/features' },
      { text: '下载', link: '/download' },
      { text: '文档', link: '/guide' }
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
      { icon: 'github', link: 'https://github.com/PCL-Community/PCL2-CE' }
    ],

    footer: {
      message: 'Released under the PCL-CE License.',
      copyright: '此网站由冰晶石构建 | 本网站为 PCL-CE 启动器非官方网站<br>PCL社区版基于龙腾猫跃 PCL 构建 | Copyright © 2025 PCL 社区版'
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