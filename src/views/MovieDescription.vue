<template>
  <div class="text-white bg-mediumDark min-h-screen pb-10">
    <div class="ml-[400px]">
      <div class="py-6 text-2xl">
        <h1>Movie discription</h1>
      </div>
      <div class="flex gap-6">
        <div class="min-w-[800px] rounded-md overflow-hidden">
          <img src="@/assets/images/landing_image_1.png" alt="movie" class="w-full" />
        </div>
        <div class="flex flex-col gap-5">
          <div>
            <h1>COMMITMENT HASAN (1999)</h1>
          </div>
          <div class="flex gap-3">
            <span class="bg-mediumGray py-1 px-2 rounded">ROMANCE</span>
            <span class="bg-mediumGray py-1 px-2 rounded">COMEDY</span>
          </div>
          <div>
            <h3>directore: NICK CASSAVETES</h3>
          </div>
          <div>
            <p>
              In a nursing home, resident Duke reads a romance story to an old woman who has senile
              dementia with memory loss. In the late 1930s, wealthy seventeen year-old Allie
              Hamilton is spending summer vacation in Seabrook. Local worker Noah Calhoun meets
              Allie at a carnival
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-3 my-6 items-center">
        <h2>Quotes (Total 7)</h2>
        <div class="bg-mediumGray w-[1px] h-6"></div>
        <button class="bg-darkRed rounded py-1 px-2 flex items-center gap-2">
          <img src="@/assets/icons/add_movie.svg" alt="" class="inline-block" />
          <span>Add Quote</span>
        </button>
      </div>
      <div class="w-[800px] mt-10 flex flex-col gap-6">
        <div class="bg-darkBlack rounded-md">
          <div class="flex justify-between p-5">
            <div class="w-56">
              <img src="@/assets/images/landing_image_1.png" alt="quote" />
            </div>
            <div class="flex items-center">
              <h1>"Frankly, my dear, I don'tgive a damn."</h1>
            </div>
            <div class="mt-2 mr-2">
              <img src="@/assets/icons/three_dots.svg" alt="dots" />
            </div>
          </div>
          <div class="flex border-t mx-5 py-5 gap-3">
            <div class="flex gap-3">
              <p>10</p>
              <span><img src="@/assets/icons/comment.svg" alt="comment" /></span>
            </div>
            <div class="flex gap-3">
              <p>10</p>
              <button><img src="@/assets/icons/likes.svg" alt="likes" /></button>
            </div>
          </div>
        </div>
        <div class="bg-darkBlack rounded-md">
          <div class="flex justify-between p-5">
            <div class="w-56">
              <img src="@/assets/images/landing_image_1.png" alt="quote" />
            </div>
            <div class="flex items-center">
              <h1>"Frankly, my dear, I don'tgive a damn."</h1>
            </div>
            <div class="mt-2 mr-2">
              <img src="@/assets/icons/three_dots.svg" alt="dots" />
            </div>
          </div>
          <div class="flex border-t mx-5 py-5 gap-3">
            <div class="flex gap-3">
              <p>10</p>
              <span><img src="@/assets/icons/comment.svg" alt="comment" /></span>
            </div>
            <div class="flex gap-3">
              <p>10</p>
              <button><img src="@/assets/icons/likes.svg" alt="likes" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
