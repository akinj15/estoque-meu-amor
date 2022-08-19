import { ref } from "vue";
import { useEstoqueStore } from "src/stores/UseEstoqueStore";
import editarItem from "../components/EditarItemComponent.vue";

export default {
  components: {
  editarItem,
  },
  setup() {
    const estoqueStore = useEstoqueStore();
    const modalItem = ref();
    const created = () => estoqueStore.postProduto()
    created()
    return {
      estoqueStore,
      modalItem,
    };
  },
};
