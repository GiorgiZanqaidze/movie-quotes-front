<template>
  <div class="font-helventica_bold relavive">
    <RouterView name="header" />
    <RouterView name="navigation" />
    <RouterView />
  </div>
</template>

<style>
body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: #12101a;
}

body::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: #fff;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(18, 16, 26) 0%,
    rgb(121, 111, 161) 20%,
    white 50%,
    rgb(121, 111, 161) 80%,
    rgb(18, 16, 26) 100%
  );
}
</style>
