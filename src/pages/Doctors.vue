<template>
  <DefaultLayout title="doctors">
    <div class="flex font-bold gap-2">
      <div style="width: 50px">No</div>
      <div style="width: 200px">Name</div>
      <div style="width: 100px">Role</div>
      <div style="width: 150px">Department</div>
      <div class="flex-1">Action</div>
    </div>
    <div class="flex items-center gap-2" style="height: 40px">
      <div style="width: 50px">#</div>
      <div style="width: 200px">
        <input v-model="newDoctor.name" class="alex-input" />
      </div>
      <div style="width: 100px">
        <select v-model="newDoctor.role">
          <option :value="EStaffRole.Head">
            {{ EStaffRole.Head }}
          </option>
          <option :value="EStaffRole.Doctor">
            {{ EStaffRole.Doctor }}
          </option>
        </select>
      </div>
      <div style="width: 150px">
        <select v-model="newDoctor.department">
          <option :value="EStaffDepartment.Cardiology">
            {{ EStaffDepartment.Cardiology }}
          </option>
          <option :value="EStaffDepartment.Surgery">
            {{ EStaffDepartment.Surgery }}
          </option>
        </select>
      </div>
      <div class="flex-1 flex gap-4">
        <div class="alex-btn-icon alex-btn-icon-base" @click="addDoctor">
          <FontAwesomeIcon :icon="faAdd" />
        </div>
        <div class="alex-btn-icon alex-btn-icon-danger" @click="clearForm">
          <FontAwesomeIcon :icon="faMultiply" />
        </div>
      </div>
    </div>
    <Doctor
      v-for="(d, index) in doctors"
      :key="index"
      :doctor="d"
      :index="index + 1"
    />
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Doctor from "../components/Doctor.vue";
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { IStaff } from "../interfaces";
import { EStaffDepartment, EStaffRole, EStaffType } from "../interfaces/enums";
import { faAdd, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useToast } from "vue-toast-notification";

const $store = useStore();
const $toast = useToast();
const doctors = computed(() => $store.state.doctors);
const newDoctor: IStaff = reactive({
  id: 123,
  name: "",
  role: EStaffRole.Doctor,
  department: EStaffDepartment.Cardiology,
  type: EStaffType.Doctor,
});
const clearForm = () => {
  newDoctor.id = 123;
  newDoctor.name = "";
  newDoctor.role = EStaffRole.Doctor;
  newDoctor.department = EStaffDepartment.Cardiology;
  newDoctor.type = EStaffType.Doctor;
};
const addDoctor = () => {
  if (newDoctor.name.trim() === "") {
    $toast.error("You must fill name field");
    return;
  }
  $store.dispatch("addDoctor", { ...newDoctor });
  $toast.success("Doctor added successfully!");
  clearForm();
};
</script>

<style lang="scss" scoped></style>
