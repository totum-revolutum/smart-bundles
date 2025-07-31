<script setup>
import { ref } from "vue";

const fileInput = ref(null);
const photoUrl = ref("");
const userStore = useUserStore();

function uploadPhoto() {
  fileInput.value.click();
}

function handleFile(event) {
  const file = event.target.files[0];
  if (file) {
    photoUrl.value = URL.createObjectURL(file);
    userStore.setPhoto(file);
  }
}
</script>

<template>
  <div class="photo-place" @click="uploadPhoto">
    <img
      v-if="!photoUrl"
      src="/public/camera.svg"
      alt="Upload"
      class="camera-icon"
    />
    <img v-else :src="photoUrl" alt="User photo" class="uploaded-photo" />
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      style="display: none"
      @change="handleFile"
    />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.photo-place {
  background-color: #d9d9d9;
  margin-inline: 40px;
  margin-top: 35px;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.camera-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.uploaded-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 850px) {
  .photo-place {
    margin-bottom: 20px;
  }
}
</style>
