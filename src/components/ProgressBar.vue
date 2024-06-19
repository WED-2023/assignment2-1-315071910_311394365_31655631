<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style scoped>
.progress-bar {
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 20px;
}

.progress {
  background: #76c7c0;
  height: 100%;
  transition: width 0.3s ease;
}
</style>
