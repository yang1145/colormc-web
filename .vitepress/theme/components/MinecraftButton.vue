<template>
  <a 
    :href="link" 
    :class="['button', `button-${type}`]"
    role="button"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
export default {
  name: 'MinecraftButton',
  props: {
    link: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary' // primary, secondary, tertiary, normal
    }
  }
}
</script>

<style scoped>
/* 按钮样式已经在 minecraft.css 中定义，这里不需要重复定义 */
.button {
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 60px;
  font-size: 20px;
  padding: 15px 30px !important;
  margin: 0.5rem;
  text-align: center;
}
</style>