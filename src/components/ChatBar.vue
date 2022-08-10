<template>
  <div class="bg-primary p-4" id="chatBar">
    <form action="" @submit.prevent="">
      <div class="row justify-content-center">
        <div class="col-12 d-flex gap-2">
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Type your message"
            aria-label="Message"
          />

          <button class="btn bt-lg btn-dark" type="submit">Enter</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ChatBar",
};
</script>

<style lang="scss" scoped>
#chatBar {
  border-radius: 18px;

  input {
    outline: none;
  }
}
</style>