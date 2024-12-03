<template>
  <DefaultLayout title="nurses">
    <div class="flex font-bold gap-2">
      <div style="width: 50px">No</div>
      <div style="width: 200px">Name</div>
      <div style="width: 150px">Department</div>
      <div class="flex-1">Action</div>
    </div>
    <AddStaff :type="EStaffType.Nurse" />
    <Staff
      v-for="(n, index) in nurses"
      :key="index"
      :staff="n"
      :index="index + 1"
      :type="EStaffType.Nurse"
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
const nurses = computed(() =>
  $store.state.staffs.filter((s) => s.type === EStaffType.Nurse)
);
</script>

<style lang="scss" scoped></style>
