<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  field: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isEditing = ref(false);
const localValue = ref(props.modelValue);

function startEdit() {
  isEditing.value = true;
}

function saveEdit() {
  isEditing.value = false;
  emit("update:modelValue", localValue.value);
}
</script>

<template>
  <div class="editable-field">
    <input
      v-if="isEditing"
      v-model="localValue"
      @blur="saveEdit"
      @keyup.enter="saveEdit"
      class="edit-input"
      autofocus
    />
    <span
      v-else
      @click="startEdit"
      class="editable-text"
      :class="{ 'empty-value': !modelValue }"
    >
      {{ modelValue }}
    </span>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.editable-text {
  cursor: pointer;
}

.empty-value::after {
  content: "need to add";
  color: #999;
}

.edit-input {
  font-size: 14px;
  width: 80%;
  padding: 2px 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  margin-left: 8px;
}

@media (max-width: 850px) {
  .editable-field {
    border: 1px solid $light_grey_stroke;
    padding: 14px 12px;
    width: 95%;
  }
}
</style>
