<template>
  <div class="home">
    <h1>面试系统</h1>
    <div class="menu">
      <router-link to="/interview" class="menu-item">开始面试</router-link>
      <router-link to="/history" class="menu-item">历史记录</router-link>
      <router-link to="/management" class="menu-item">系统管理</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}

.menu {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.menu-item {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #45a049;
}
</style>
