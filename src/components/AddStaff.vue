<template>
  <div class="flex items-center gap-2" style="height: 40px">
    <div style="width: 50px">#</div>
    <div style="width: 200px">
      <input v-model="newStaff.name" class="alex-input" />
    </div>
    <div style="width: 100px" v-if="type === EStaffType.Doctor">
      <select v-model="newStaff.role" v-if="type === EStaffType.Doctor">
        <option :value="EStaffRole.Head">
          {{ EStaffRole.Head }}
        </option>
        <option :value="EStaffRole.Doctor">
          {{ EStaffRole.Doctor }}
        </option>
      </select>
    </div>
    <div style="width: 150px">
      <select v-model="newStaff.department">
        <option :value="EStaffDepartment.Cardiology">
          {{ EStaffDepartment.Cardiology }}
        </option>
        <option :value="EStaffDepartment.Surgery">
          {{ EStaffDepartment.Surgery }}
        </option>
      </select>
    </div>
    <div class="flex-1 flex gap-4">
      <div class="alex-btn-icon alex-btn-icon-base" @click="addStaff">
        <FontAwesomeIcon :icon="faAdd" />
      </div>
      <div class="alex-btn-icon alex-btn-icon-danger" @click="clearForm">
        <FontAwesomeIcon :icon="faMultiply" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { reactive, ref, watch } from "vue";
import { useToast } from "vue-toast-notification";
import { faAdd, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { EStaffDepartment, EStaffRole, EStaffType } from "../interfaces/enums";
import { IStaff } from "../interfaces";

const $toast = useToast();
const $store = useStore();
const props = defineProps<{
  type: EStaffType;
}>();
const newId = ref(0);

watch($store.state.staffs, async (newV, _) => {
  newId.value = newV.reduce(
    (max: number, s: IStaff) => (s.id > max ? s.id : max),
    0
  );
});

const newStaff: IStaff = reactive({
  id: newId.value,
  name: "",
  type: props.type,
  role: props.type === EStaffType.Doctor ? EStaffRole.Doctor : EStaffRole.Nurse,
  department: EStaffDepartment.Cardiology,
});

const clearForm = () => {
  newStaff.id = newId.value;
  newStaff.name = "";
  newStaff.role =
    props.type === EStaffType.Doctor ? EStaffRole.Doctor : EStaffRole.Nurse;
  newStaff.department = EStaffDepartment.Cardiology;
  newStaff.type = props.type;
};
const addStaff = () => {
  if (newStaff.name.trim() === "") {
    $toast.error("You must fill the name field");
    return;
  }
  $store.dispatch("addStaff", { ...newStaff });
  $toast.success(`${newStaff.name} added successfully!`);
  clearForm();
};
</script>

<style lang="sass" scoped></style>
