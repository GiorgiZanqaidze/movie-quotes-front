<template>
  <div class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] bg-black/75"></div>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 w-[601px] h-[704px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium"
  >
    <header class="flex flex-col items-center">
      <h1 class="text-white sm:mt-10 sm:text-3xl">Create an account</h1>
      <span class="text-mediumGray text-sm">Start your journey!</span>
    </header>
    <form class="text-white w-[360px] mx-auto flex flex-col sm:gap-4">
      <div class="flex flex-col gap-1">
        <label for="name"
          >Name
          <img src="@/assets/icons/required_star_icon.svg" alt="required" class="inline-block"
        /></label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="At least 3 & max.15 lower case characters"
          class="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email"
          >Email
          <img src="@/assets/icons/required_star_icon.svg" alt="required" class="inline-block"
        /></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          class="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="password"
          >Password
          <img src="@/assets/icons/required_star_icon.svg" alt="required" class="inline-block"
        /></label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="At least 8 & max.15 lower case characters"
          class="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="password_confirmation"
          >Confirm password
          <img src="@/assets/icons/required_star_icon.svg" alt="required" class="inline-block"
        /></label>
        <input
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          class="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 border-gray-500 focus:border-lightDark focus:outline-none focus:border-4"
        />
      </div>
      <button class="w-full bg-darkRed sm:py-1 rounded">Get Started</button>
      <button class="w-full bg-transparent border sm:py-1 rounded">
        <img src="@/assets/icons/google_icon.svg" alt="google" class="inline-block w-[20px] mr-1" />
        Sign up with Google
      </button>
      <span class="sm:text-[16px] text-center text-mediumGray"
        >Already have an account? <button class="text-mediumBlue">Log In</button></span
      >
    </form>
  </div>
</template>

<script>
export default {}
</script>
