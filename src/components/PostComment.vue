<template>
  <div class="flex items-center gap-4 mt-4">
    <profile-icon :path="authUser.authUserIcon"></profile-icon>

    <Form @submit="handleSubmit" class="flex flex-col gap-2 w-full">
      <Field
        rules="required"
        type="text"
        name="comment"
        :placeholder="$t('news_feed.write_a_comment')"
        class="py-2 px-3 rounded-md bg-gray sm:text-[20px] text-[16px]"
        v-model="text"
      />
    </Form>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user'
import { Form, Field } from 'vee-validate'
import { useCommentStore } from '@/stores/comment.js'
import { ref, defineProps } from 'vue'

const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})

const authUser = userStore()

const comment = useCommentStore()

const text = ref('')

const handleSubmit = async () => {
  const commentData = {
    text: text.value,
    user_id: authUser.data.id,
    quote_id: props.quote.id,
    receiver_id: props.quote.author.id,
    type: 'comment',
    sender_id: authUser.data.id
  }

  await comment.postComment(commentData)

  text.value = ''
}
</script>
