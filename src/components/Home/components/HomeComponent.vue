<template>
  <div class="row q-pa-md">
    <q-card flat bordered class="my-card col-12 q-my-sm">
      <q-card-section>
        <div class="text-h6">total de vendas no mês</div>
      </q-card-section>
      <q-separator inset />

      <q-card-section class="q-pt-none text-center">
        <div class="text-h3">00</div>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="my-card col-12 q-my-sm">
      <q-card-section>
        <div class="text-h6">total de lucro no mês</div>
      </q-card-section>
      <q-separator inset />

      <q-card-section class="q-pt-none text-center">
        <div class="text-h3">00</div>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="my-card col-12 q-my-sm">
      <q-card-section>
        <div class="text-h6">total de arrecadado no mês</div>
      </q-card-section>
      <q-separator inset />

      <q-card-section class="q-pt-none text-center">
        <div class="text-h3">00</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import HomeComponent from "../controllers/HomeController.js";
export default HomeComponent;
</script>
