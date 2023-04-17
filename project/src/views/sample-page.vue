<template>
  <div>
    <div>
      <h1>Meter Exemptions</h1>
    </div>
    <div>
      <div>
        <h5 class="search-label">Search</h5>
        <InputText class="search-input" v-model="selectedExemptionId" placeholder="Exemption ID" />
      </div>
      <div>
        <h5>From</h5>
        <Calendar v-model="fromDate" :showIcon=true autocomplete="off" :showButtonBar="true" dateFormat="dd/mm/yy" placeholder="From"/>
      </div>
      <div>
        <Button label="Search" @click="submitSearch()" />
      </div>
      <div>
        <Button  label="Clear" @click="resetSearch()" />
      </div>
    </div>
    <div>
      <DataTable :value="results">
        <Column v-for="col in columns" :field="col.field" :header="col.header"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {computed, onMounted, reactive, ref, watch} from 'vue';

const columns = [
  { field: "id", header: "Exemption ID" },
  { field: "createdDate", header: "Date" },
  { field: "status", header: "Status" },
];
const selectedExemptionId = ref();
const fromDate = ref();
const result = ref([]
)

const resetSearch = () => {
  //to do - clear the filter, id & date
}

const submitSearch = () => {
  //to do - Loading the data
}

</script>

<style lang="scss" scoped>
</style>
