<template>
  <div>
    <!-- compositionAPI使用-->
    <Composition></Composition>
    <!-- Teleport传送门 -->
    <ModalButton></ModalButton>
  </div>
</template>

<script>
import Composition from "./CompositionAPI.vue";
import ModalButton from "./ModalButton.vue";
export default {
  name: "HelloWorld",
  components: {
    Composition,
    ModalButton,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>