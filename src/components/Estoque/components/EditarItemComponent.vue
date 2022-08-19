<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Nome do produto</div>
    </q-card-section>

    <q-separator />

    <q-card-section style="max-height: 50vh">
      <div class="row">
        <div class="col-6 q-pa-xs">
          <q-input label="quantidade" dense outlined></q-input>
        </div>

        <div class="col-6 q-pa-xs text-right">
          <q-btn label="" icon="add" flat color="primary" />
        </div>
      </div>
      <!--  -->
      <q-list bordered padding class="scroll">
        <q-item-label header>quantidades</q-item-label>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>data</q-item-label>
            <q-item-label caption> quantidades </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="delete" color="grey" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat label="sair" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import EditarItemComponent from "../controllers/EditarItemController.js";
export default EditarItemComponent;
</script>
