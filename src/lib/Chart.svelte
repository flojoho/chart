<script lang="ts">
  import startAnimation from "./chartLogic";
</script>

<canvas use:startAnimation></canvas>

<style>
  canvas {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    padding: 0;
  }
</style>
