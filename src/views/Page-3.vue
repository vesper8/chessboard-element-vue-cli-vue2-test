<template>
  <div style="width: 50vw">
    <chess-board position="start" />

    <ChessBoardLoader v-if="mounted" />
  </div>
</template>

<script>
import ChessBoardLoader from "@/components/ChessBoardLoader";

export default {
  data() {
    return {
      mounted: false,
    }
  },

  components: {
    ChessBoardLoader,
  },

  mounted () {
    setTimeout(() => {
      this.mounted = true;
    }, 250);
  },
};
</script>
