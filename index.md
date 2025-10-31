---
layout: home

hero:
  name: "ColorMC"
  text: "最强大的 Minecraft 启动器"
  tagline: 开源免费的 Minecraft 启动器，提供最佳的游戏体验。支持多实例管理、模组管理、账户管理等功能。
  image:
    src: /logo.png
    alt: ColorMC启动器

---

<style>
.feature-highlights {
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.feature-highlights h2 {
  margin-top: 0;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 10px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-card {
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-top: 0;
  color: var(--vp-c-brand);
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .button-container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>

<div class="button-container">
  <MinecraftButton link="/download" text="立即下载" type="primary"></MinecraftButton>
  <MinecraftButton link="/features" text="功能介绍" type="secondary"></MinecraftButton>
</div>

<div class="feature-highlights">
  <h2>特色功能</h2>
  <div class="feature-grid">
    <div class="feature-card">
      <h3>现代化UI</h3>
      <p>直观简洁的操作界面，响应式设计适配不同屏幕尺寸，流畅的动画效果和交互体验。</p>
    </div>
    <div class="feature-card">
      <h3>主题系统</h3>
      <p>深色/浅色主题自由切换，支持自定义主题色和背景，保护用户视力，适应不同使用环境。</p>
    </div>
    <div class="feature-card">
      <h3>资源收藏</h3>
      <p>支持收藏喜爱的皮肤、材质包、地图等资源，方便快速访问和管理，建立个人专属资源库。</p>
    </div>
    <div class="feature-card">
      <h3>一站式资源下载</h3>
      <p>集成海量皮肤、材质包、地图等资源，支持多种资源平台的快速搜索，一键导入功能。</p>
    </div>
    <div class="feature-card">
      <h3>高效下载</h3>
      <p>多线程下载技术，智能断点续传，多源下载支持，可调节下载线程数和下载源。</p>
    </div>
    <div class="feature-card">
      <h3>跨平台支持</h3>
      <p>完美支持Windows、Linux和macOS，针对不同平台优化体验，统一的操作界面和功能。</p>
    </div>
  </div>
</div>