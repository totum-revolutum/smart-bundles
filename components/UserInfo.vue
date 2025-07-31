<script setup lang="ts">
import { ref } from "vue";
import EditableField from "./EditableField.vue";

const userStore = useUserStore();

type ProfileFields = {
  country: string;
  address: string;
  postcode: string;
  idCode: string;
  birthday: string;
  idPhoto: string;
  facebook: string;
  linkedin: string;
  phone: string;
  mobile: string;
  home: string;
};

type FieldKey = keyof ProfileFields;

const fields = ref<ProfileFields>({
  country: "Israel",
  address: "Tel Aviv-Yafo, Shabazi 55",
  postcode: "",
  idCode: "134275638",
  birthday: "",
  idPhoto: "✓",
  facebook: "",
  linkedin: "",
  phone: "",
  mobile: "",
  home: "",
});

interface ColumnField {
  key: FieldKey;
  label: string;
  editable: boolean;
  special?: boolean;
}

const columns: ColumnField[][] = [
  [
    { key: "country", label: "Country", editable: true },
    { key: "address", label: "Address", editable: true },
    { key: "postcode", label: "Postcode", editable: false, special: true },
  ],
  [
    { key: "idCode", label: "ID Code", editable: true },
    { key: "birthday", label: "Birthday", editable: true },
    { key: "idPhoto", label: "ID Photo", editable: false },
  ],
  [
    { key: "facebook", label: "Facebook", editable: true },
    { key: "linkedin", label: "LinkedIn", editable: true },
  ],
  [
    { key: "phone", label: "Phone", editable: true },
    { key: "mobile", label: "Mobile", editable: false, special: true },
    { key: "home", label: "Home", editable: true },
  ],
];

watch(
  fields,
  (newFields) => {
    userStore.updateProfile({ ...newFields });
  },
  { deep: true }
);
</script>

<template>
  <div class="profile-container">
    <div class="profile-grid">
      <div
        v-for="(column, colIndex) in columns"
        :key="colIndex"
        class="profile-column"
      >
        <div
          v-for="field in column"
          :key="field.key"
          class="profile-field"
          :class="{ 'special-field': field.special }"
        >
          <span class="field-label" :class="{ 'orange-label': field.special }">
            {{ field.label }}
          </span>

          <template v-if="field.key === 'idPhoto'">
            <span class="check-mark">✓</span>
          </template>
          <template v-else-if="field.special">
            <span class="special-value">{{ fields[field.key] }}</span>
          </template>
          <EditableField
            v-else
            v-model="fields[field.key]"
            :field="field.key"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.profile-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.profile-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.profile-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.field-label {
  font-weight: bold;
  line-height: 25px;
}

.orange-label {
  color: $secondary-color;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80px;
    height: 1px;
    background-color: $light_grey_stroke;
  }
}

.check-mark {
  color: green;
  font-weight: bold;
}

.empty-value::after {
  content: "need to add";
  color: $dark_grey_caption;
  font-style: italic;
}

@media (max-width: 850px) {
  .profile-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }

  .profile-field {
    flex-direction: column;
    align-items: flex-start;
  }

  .orange-label {
    padding-bottom: 16px;
    &::after {
      width: 300px;
    }
  }
}

@media (min-width: 851px) and (max-width: 1290px) {
  .profile-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
</style>
