---
title: 下载PCL-CE启动器
---

<script setup>
import { ref } from 'vue'

const version = ref({ 
  version: '2.13.3', 
  date: '2025-10-05', 
  size: '11.6MB',
  features: ['自 2.13.0 起，PCL CE 将需要 .NET 8 桌面运行时才能运行。', '如果你还未安装，请下载并安装 .NET 8 桌面运行时。']
})

const downloadLinks = ref([
  { name: '立即下载', url: 'https://github.com/PCL-Community/PCL2-CE/releases/download/2.13.3/PCL2_CE_Release_x64.exe' },
])
</script>

# 下载PCL启动器

<div class="version-card">
  <h3>{{ version.version }}</h3>
  <p class="version-info">发布日期：{{ version.date }} | 大小：{{ version.size }}</p>
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

@media (max-width: 768px) {
  .download-buttons {
    flex-direction: column;
  }
  
  .download-button {
    min-width: auto;
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