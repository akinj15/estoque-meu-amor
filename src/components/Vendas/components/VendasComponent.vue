<template>
  <div class="row">
    <div class="col-12 text-h6 text-center">Vendas</div>
    <div class="col-12 q-px-md q-py-sm">
      <q-select :options="['options']" dense outlined label="produtos" />
    </div>
    <div class="col-6 q-px-md q-py-sm">
      <q-input label="quantidade" dense outlined></q-input>
    </div>
    <div class="col-6 q-px-md q-py-sm text-right">
      <q-btn label="vender" outline color="primary" />
    </div>
    <div class="col-12 q-pa-md">
      <q-list bordered padding>
        <q-item-label header>vendas</q-item-label>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>nome do produto</q-item-label>
            <q-item-label caption> quantidade - valor</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="delete" color="grey" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import VendasComponent from "../controllers/VendasController.js";
export default VendasComponent;
</script>
