<script setup></script>

<template>
  <main>
    <div class="container first bg-black">
      <h1 class="w-[700px] text-4xl text-lightGrey font-medium">
        Find any quote in millions of movie lines ქართული
      </h1>
      <a href="#" class="font-normal text-white rounded mt-4 bg-darkRed px-3 py-2"> Get Started </a>
    </div>

    <div class="container second"></div>
    <div class="container"></div>
  </main>
</template>

<style scoped>
.container {
  text-align: center;
  min-width: 100%;
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80);
  background-size: cover;
  background-position: center;

  /*  this is where the magic happens:  */
  background-attachment: fixed;
}

.second {
  background-image: url(https://images.unsplash.com/photo-1514496959998-c01c40915c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
  background-attachment: fixed;
  height: 1200px;
}
</style>
