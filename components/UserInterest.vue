<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const store = useUserStore();

if (!store.interests) {
  store.interests = [];
}
</script>

<template>
  <div class="interests">
    <div class="interests__title">Interests</div>
    <div class="interests-section">
      <div class="interests-grid">
        <label
          v-for="interest in [
            'High-tech',
            'Medicine',
            'Money',
            'Sentences',
            'Independent',
            'Other',
          ]"
          :key="interest"
          class="interest-item"
        >
          <input
            type="checkbox"
            :checked="store.interests?.includes(interest)"
            @change="
              (e) => {
                if (e.target.checked) {
                  store.interests = [...(store.interests || []), interest];
                } else {
                  store.interests = (store.interests || []).filter(
                    (i) => i !== interest
                  );
                }
              }
            "
            class="visually-hidden"
          />
          <span class="custom-checkbox"></span>
          {{ interest }}
        </label>
      </div>
    </div>
    <button class="save-btn" @click="store.submitData">Save</button>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.interests {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  &__title {
    font-weight: bold;
  }
}

.interests-section {
  width: 100%;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.save-btn {
  background-color: #90b53f;
  color: white;
  border: none;
  padding: 10px 24px;
  cursor: pointer;

  &:hover {
    background-color: #42b983;
  }
}

@media (min-width: 850px) {
  .interests {
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    padding: 0;
  }

  .interests-grid {
    display: flex;
    flex-wrap: wrap;
  }
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  cursor: pointer;
}

@media (min-width: 1200px) and (max-width: 1500px) {
  .interests {
    flex-wrap: wrap;
    gap: 15px;
  }

  .interests__title {
    flex: 0 0 100%;
  }

  .interests-section {
    flex: 1;
    min-width: 0;
  }

  .interests-grid {
    gap: 15px;
  }
}

@media (min-width: 1500px) {
  .interests {
    flex-wrap: nowrap;
    gap: 20px;
  }

  .interests-grid {
    gap: 45px;
  }
}
</style>
