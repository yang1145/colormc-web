---
title: 下载ColorMC启动器
---

<script setup>
import { ref, onMounted } from 'vue'

const version = ref({ 
  version: '获取中...', 
  date: '获取中...', 
  size: '获取中...',
  features: ['ColorMC是一个多实例Minecraft启动器', '支持多种账户类型登录，包括离线、微软、外置登录等', '支持多种模组加载器，如Forge、Fabric、Quilt等']
})

const downloadLinks = ref([
  { name: 'Releases', url: 'https://github.com/Coloryr/ColorMC/releases' },
  { name: 'Actions (测试版)', url: 'https://github.com/Coloryr/ColorMC/actions' },
])

const assets = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/Coloryr/ColorMC/releases/latest')
    const data = await response.json()
    
    version.value = {
      version: data.name,
      date: new Date(data.published_at).toLocaleDateString('zh-CN'),
      size: '视平台而定',
      features: version.value.features
    }
    
    assets.value = data.assets.map(asset => ({
      name: asset.name,
      url: asset.browser_download_url,
      size: (asset.size / 1024 / 1024).toFixed(2) + ' MB',
      downloadCount: asset.download_count
    }))
    
    // 更新下载链接为具体的最新版本链接
    downloadLinks.value[0].url = data.html_url
  } catch (error) {
    console.error('获取GitHub Release信息失败:', error)
    version.value = {
      version: '获取失败', 
      date: '获取失败', 
      size: '未知',
      features: version.value.features
    }
  }
})
</script>

# 下载ColorMC启动器

<div class="version-card">
  <h3>{{ version.version }}</h3>
  <p class="version-info">更新时间：{{ version.date }} | 大小：{{ version.size }}</p>
  <ul>
    <li v-for="(feature, index) in version.features" :key="index">{{ feature }}</li>
  </ul>
  
  <div class="download-buttons">
    <a 
      v-for="(link, index) in downloadLinks" 
      :key="index"
      :href="link.url" 
      class="download-button"
      target="_blank"
    >
      {{ link.name }}
    </a>
  </div>
</div>

<div v-if="assets.length > 0" class="assets-section">
  <h3>下载文件</h3>
  <div class="assets-list">
    <div v-for="(asset, index) in assets" :key="index" class="asset-item">
      <div class="asset-info">
        <div class="asset-name">{{ asset.name }}</div>
        <div class="asset-meta">
          <span class="asset-size">{{ asset.size }}</span>
          <span class="asset-downloads">{{ asset.downloadCount }} 次下载</span>
        </div>
      </div>
      <a :href="asset.url" class="asset-download-button" target="_blank">下载</a>
    </div>
  </div>
</div>

<style scoped>
.version-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.version-card h3 {
  margin-top: 0;
  color: #2c3e50;
}

.version-info {
  color: #7f8c8d;
  font-size: 0.9em;
}

.version-card ul {
  padding-left: 20px;
}

.version-card li {
  margin-bottom: 5px;
}

.download-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.download-button {
  display: inline-block;
  background-color: #3eaf7c;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  text-align: center;
  border: 2px solid #2c8a62;
  box-shadow: 0 4px 0 #2c8a62;
  font-size: 14px;
  padding: 8px 16px;
  margin: 4px;
  position: relative;
  cursor: pointer;
  min-width: 100px;
  width: auto;
  flex: 0 1 auto;
}

.download-button:hover {
  background-color: #2c8a62;
  transform: translateY(2px);
  box-shadow: 0 2px 0 #2c8a62;
}

.download-button:active {
  transform: translateY(4px);
  box-shadow: none;
}

.assets-section {
  margin-top: 30px;
}

.assets-section h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.assets-list {
  display: grid;
  gap: 15px;
}

.asset-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f8f9fa;
}

.asset-info {
  flex: 1;
}

.asset-name {
  font-weight: 500;
  margin-bottom: 5px;
  word-break: break-all;
}

.asset-meta {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
  color: #6c757d;
}

.asset-download-button {
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
  white-space: nowrap;
  margin-left: 15px;
}

.asset-download-button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .download-buttons {
    flex-direction: column;
  }
  
  .download-button {
    min-width: auto;
  }
  
  .asset-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .asset-download-button {
    margin-left: 0;
    align-self: stretch;
    text-align: center;
  }
  
  .asset-meta {
    gap: 10px;
  }
}

@media (min-width: 768px) {
  .download-button {
    font-size: 16px;
    padding: 10px 20px;
    margin: 6px;
    min-width: 120px;
  }
}
</style>