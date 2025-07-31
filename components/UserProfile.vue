<script setup>
import UserInfo from "./UserInfo.vue";
import UserInterest from "./UserInterest.vue";
import UserPhoto from "./UserPhoto.vue";
</script>

<template>
  <div class="card">
    <aside class="sidebar">
      <div class="avatar">
        <span class="name">Test R</span>
      </div>
      <UserPhoto />
    </aside>

    <section class="content">
      <UserInfo />
      <UserInterest />
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.card {
  display: flex;
  font-size: 14px;
  border: 1px solid $light_grey_stroke;
  overflow: hidden;
}

.sidebar {
  display: flex;
}

.avatar {
  background-color: #132760;
  color: white;
  width: 223px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar .name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.content {
  flex: 1;
  padding: 2rem;
}

@media (max-width: 850px) {
  .card {
    flex-direction: column;
    border: none;
  }

  .sidebar {
    flex-direction: column;
    border: 1px solid $light_grey_stroke;
    align-items: center;
  }
  .avatar {
    width: 100%;
    height: 80px;
  }

  .content {
    margin-top: 25px;
    padding: 25px;
    border: 1px solid $light_grey_stroke;
  }
}

@media (min-width: 1400px) {
  .card {
    font-size: 16px;
  }
}
</style>
