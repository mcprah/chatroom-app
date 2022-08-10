<template>
  <div class="bg-primary p-4" id="chatBar">
    <form @submit.prevent="emitMessage">
      <div class="row justify-content-center">
        <div class="col-12 d-flex gap-2">
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Type your message"
            v-model="message"
            aria-label="Message"
          />
          <button
            class="btn bt-lg btn-dark"
            type="submit"
            @submit.prevent="sendMessage"
          >
            Enter
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ChatBar",
  data() {
    return {
      arrMessages: [],
      message: "",
      userData: {},
    };
  },
  mounted() {
    this.arrMessages = this.$helpers.getMessagesFromMemory();
    this.userData = { id: "2", name: "Mark" };
  },
  computed: {
    messageObj() {
      return {
        user: this.userData,
        message: this.message,
      };
    },
  },
  methods: {
    emitMessage(event) {
      this.$emit("sendMessage", this.sendMessage());
    },
    async saveMessageInMemory() {
      const parsed = JSON.stringify(this.arrMessages);
      localStorage.setItem("chatRoomMessages", parsed);
    },

    sendMessage() {
      if (!this.message) {
        return;
      }

      this.arrMessages.push(this.messageObj);
      this.saveMessageInMemory().then((val) => {
        this.message = "";
      });
      return this.$helpers.getMessagesFromMemory();
    },
  },
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