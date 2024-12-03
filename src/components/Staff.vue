<template>
  <div class="flex items-center gap-2" style="height: 40px">
    <div style="width: 50px">{{ index }}</div>
    <div style="width: 200px">
      <span v-if="!editable">
        {{ staff.name }}
      </span>
      <input v-model="editedValue.name" v-if="editable" class="alex-input" />
    </div>
    <div style="width: 100px" v-if="type === EStaffType.Doctor">
      <span v-if="!editable">
        {{ staff.role }}
      </span>
      <select
        v-model="editedValue.role"
        v-if="editable && type === EStaffType.Doctor"
      >
        <option :value="EStaffRole.Head">
          {{ EStaffRole.Head }}
        </option>
        <option :value="EStaffRole.Doctor">
          {{ EStaffRole.Doctor }}
        </option>
      </select>
    </div>
    <div style="width: 150px">
      <span v-if="!editable">
        {{ staff.department }}
      </span>
      <select v-model="editedValue.department" v-if="editable">
        <option :value="EStaffDepartment.Cardiology">
          {{ EStaffDepartment.Cardiology }}
        </option>
        <option :value="EStaffDepartment.Surgery">
          {{ EStaffDepartment.Surgery }}
        </option>
      </select>
    </div>
    <div class="flex-1 flex gap-4">
      <div
        class="alex-btn-icon alex-btn-icon-base"
        v-if="!editable"
        @click="editable = true"
      >
        <FontAwesomeIcon :icon="faEdit" />
      </div>
      <div
        class="alex-btn-icon alex-btn-icon-success"
        v-if="editable"
        @click="editStaff"
      >
        <FontAwesomeIcon :icon="faSave" />
      </div>
      <div
        class="alex-btn-icon alex-btn-icon-danger"
        @click="removeStaff"
        v-if="!editable"
      >
        <FontAwesomeIcon :icon="faTrashAlt" />
      </div>
      <div
        class="alex-btn-icon alex-btn-icon-danger"
        @click="editable = false"
        v-if="editable"
      >
        <FontAwesomeIcon :icon="faMultiply" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEdit,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { EStaffDepartment, EStaffRole, EStaffType } from "../interfaces/enums";
import { IStaff } from "../interfaces";

const $store = useStore();
const $toast = useToast();
const props = defineProps<{
  staff: IStaff;
  index: number;
  type: EStaffType;
}>();
const editable = ref(false);
const editedValue: IStaff = { ...props.staff };

const removeStaff = () => {
  $store.dispatch("removeStaff", props.staff.id);
  $toast.success(`Removed ${props.staff.name} successfully`);
};
const editStaff = () => {
  if (editedValue.name.trim() === "") {
    $toast.error("You must fill the name field");
    return;
  }
  $store.dispatch("editStaff", editedValue);
  editable.value = false;
};
</script>

<style lang="sass" scoped></style>
