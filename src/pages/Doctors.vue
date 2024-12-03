<template>
  <DefaultLayout title="doctors">
    <div class="flex font-bold gap-2">
      <div style="width: 50px">No</div>
      <div style="width: 200px">Name</div>
      <div style="width: 100px">Role</div>
      <div style="width: 150px">Department</div>
      <div class="flex-1">Action</div>
    </div>
    <AddStaff :type="EStaffType.Doctor" />
    <Staff
      v-for="(d, index) in doctors"
      :key="index"
      :staff="d"
      :index="index + 1"
      :type="EStaffType.Doctor"
    />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import "vue-toast-notification/dist/theme-sugar.css";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AddStaff from "../components/AddStaff.vue";
import Staff from "../components/Staff.vue";
import { EStaffType } from "../interfaces/enums";

const $store = useStore();
const doctors = computed(() =>
  $store.state.staffs.filter((s) => s.type === EStaffType.Doctor)
);
</script>

<style lang="scss" scoped></style>
