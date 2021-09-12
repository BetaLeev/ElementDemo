<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/query">query</router-link></li>
        <li></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
a{
  text-decoration: none;
}
#app {
  font-family: Helvetica, sans-serif;
  /* text-align: center; */
  /* background: #f90; */
  background: #000;
  padding: 0px;
  margin: 0;
  /* height: 888px; */
}
nav {
  z-index: 999;
  background: #ff9900;
  height: 66px;
  width: 100%;
  color: aliceblue;
  position: sticky;
  top: 0px;
  padding: 0px 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #fff;
}
ul {
  height: 66px;
  display: flex;
  justify-content: start;
  align-items: center;
}
li {
  cursor: pointer;
  list-style: none;
  margin-right: 33px;
}
</style>
