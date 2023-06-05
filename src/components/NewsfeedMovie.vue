<template>
  <div class="bg-darkBlack w-[300px] sm:w-[961px] p-4 rounded-lg flex flex-col gap-4">
    <header class="flex items-center gap-4">
      <profile-icon></profile-icon>
      <h2>Maia Nakashidze</h2>
    </header>
    <h1>“Follow your dream.”movie- Billy Elliot. (2000)</h1>
    <div class="rounded-lg overflow-hidden">
      <img src="@/assets/images/news_feed.svg" alt="movie" />
    </div>
    <div class="flex gap-4 mt-4 border-b-2 border-light pb-4">
      <div class="flex gap-2 items-center just">
        <p>1</p>
        <button>
          <img src="@/assets/icons/comment.svg" alt="comment" />
        </button>
      </div>
      <div class="flex gap-2 items-center just">
        <p>1</p>
        <button>
          <img src="@/assets/icons/likes.svg" alt="likes" />
        </button>
      </div>
    </div>
    <the-comment></the-comment>
    <the-comment></the-comment>
    <div class="flex items-center gap-4 mt-4">
      <div class="rounded-full overflow-hidden max-w-[52px]">
        <img src="@/assets/images/landing_image.svg" alt="" class="" />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <input
          type="text"
          name="comment"
          placeholder="Write a comment"
          class="py-2 px-3 rounded-md bg-gray sm:text-[20px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
