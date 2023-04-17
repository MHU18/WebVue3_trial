<template>
  <div>
    <div>
      <h1>GraphQL</h1>
    </div>
    <div v-if="loading">Loading</div>
    <div v-else-if="error">Errored</div>
    <div v-else>
      <DataTable :value="result.nemRegions">
        <Column v-for="col in columns" :field="col.field" :header="col.header"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useQuery } from "@vue/apollo-composable";

const columns = [
  { field: "id", header: "Region" },
  { field: "name", header: "Name" },
  { field: "active", header: "Is Active" },
];
</script>

<style lang="scss" scoped>
</style>
