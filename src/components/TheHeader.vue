<template>
  <header class="flex m-3 mx-2 sm:m-5 justify-between items-center bg-black h-[38px]">
    <h1 class="text-lightGrey text-sm sm:text-lg">MOVIE QUOTES</h1>
    <div class="flex sm:gap-7 gap-3">
      <div class="flex items-center">
        <select name="langs" id="langs" class="text-white bg-black text-sm sm:text-lg">
          <option value="eng">ENG</option>
          <option value="ka">GEO</option>
        </select>
      </div>
      <div>
        <a
          href="#"
          class="text-white text-sm sm:text-lg sm:py-[7px] px-2 py-1 sm:px-3 rounded bg-darkRed"
          >Sign Up</a
        >
      </div>
      <div>
        <a
          href="#"
          class="text-white border text-sm sm:text-lg sm:py-[7px] px-2 sm:px-3 py-1 rounded bg-transparent"
          >Log In</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>
