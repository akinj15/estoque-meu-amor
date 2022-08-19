<template>
  <div class="row">
    <div class="col-12 text-h6 text-center">Estoque de Produtos</div>
    <div class="col-12">
      <q-expansion-item
        icon="add_circle"
        label="Cadastrar produto"
        caption="Novo Item"
        class="q-pa-md"
      >
        <div class="row">
          <div class="col-12 q-pa-xs">
            <q-input label="Nome" dense outlined></q-input>
          </div>
          <div class="col-12 q-pa-xs">
            <q-input label="quantidade" dense outlined></q-input>
          </div>
          <div class="col-6 q-pa-xs">
            <q-input label="custo" dense outlined></q-input>
          </div>
          <div class="col-6 q-pa-xs">
            <q-input label="valor venda" dense outlined></q-input>
          </div>
          <div class="col-12 q-pa-xs text-right">
            <q-btn label="adcionar" icon="save" color="primary" />
          </div>
        </div>
      </q-expansion-item>
    </div>
    <div class="col-12 q-pa-md">
      <q-list bordered padding>
        <q-item-label header>Produtos</q-item-label>
        <q-item clickable v-ripple @click="modalItem = !modalItem">
          <q-item-section>
            <q-item-label>nome do produto</q-item-label>
            <q-item-label caption> Saldo total </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>valor</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
  <q-dialog v-model="modalItem">
    <editarItem />
  </q-dialog>
</template>

<script>
import EstoqueComponent from "../controllers/EstoqueController.js";
export default EstoqueComponent;
</script>
