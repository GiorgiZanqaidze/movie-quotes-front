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

<script>
import { userStore } from '@/stores/user'
import TextInput from '@/components/TextInput.vue'
import { Form, Field } from 'vee-validate'
import axiosInstance from '@/config/axios/index'
import postComment from '@/services/postComment.js'
import { useCommentStore } from '@/stores/comment.js'
import { ref } from 'vue'

export default {
  components: {
    TextInput,
    Form,
    Field
  },
  props: {
    quote_id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const authUser = userStore()

    const comment = useCommentStore()

    const text = ref('')

    const handleSubmit = async () => {
      const commentData = {
        text: text.value,
        user_id: authUser.data.id,
        quote_id: props.quote_id
      }

      const response = await comment.postComment(commentData)

      text.value = ''
    }

    return { authUser, text, handleSubmit }
  }
}
</script>
