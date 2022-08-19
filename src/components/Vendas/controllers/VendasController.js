import { ref } from "vue";
import { useEstoqueStore } from "src/stores/UseEstoqueStore";
export default {
  setup() {
    const estoqueStore = useEstoqueStore();
    return {
      estoqueStore,
    };
  },
};
