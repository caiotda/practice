<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <toDo/>
  </div>
</template>

<script>
import toDo from "./components/toDo"
export default {
  name: 'app',
  components: {
    toDo
  }
}
</script>

<style>

  body {
    margin: 0px;
  }

  @font-face {
      font-family: "RobotoMono";
      src: url(./fonts/RobotoThis.ttf);
  }

  #app {
    font-family: 'RobotoMono', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    background: linear-gradient(-45deg, rgb(88, 238, 88), rgb(90, 174, 230));
    height: 100vh;

    
  }



  #app * {
    box-sizing: border-box;
  }
</style>
