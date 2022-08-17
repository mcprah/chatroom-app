<template>
  <div class="container" id="welcomePage">
    <div class="row h-100">
      <div
        class="
          col-md-12
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <h1>Welcome Buddy!</h1>
        <p class="fw-light text-center text-sm mb-4">
          You will be identified in the chatroom by the name you enter here
        </p>
        <form
          @submit.prevent="enterChatroom"
          class="d-flex flex-column align-items-center w-100"
        >
          <input
            class="form-control form-control-lg"
            placeholder="Username"
            v-model="userName"
            type="text"
            @submit.prevent="enterChatroom"
          />
          <button
            class="btn bt-lg btn-primary mt-3"
            type="submit"
            @submit.prevent="enterChatroom"
          >
            Enter Chatroom
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      usersInRoom: [],
    };
  },
  computed: {
    userData: function () {
      return {
        uid: this.getUID(),
        name: this.userName,
      };
    },
  },
  methods: {
    getUID() {
      return Math.floor(Math.random() * 3000);
    },

    async saveUserDataInMemory() {
      const parsed = JSON.stringify(this.usersInRoom);
      localStorage.setItem("usersInRoom", parsed);
    },

    enterChatroom() {
      if (!this.userName) {
        return;
      }

      this.usersInRoom = this.$helpers.getUsers();
      this.usersInRoom.push(this.userData);

      this.saveUserDataInMemory().then(() => {
        this.$router.replace({
          path: "/chatroom",
          query: this.userData,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#welcomePage {
  height: 100vh;
  max-width: 468px;
  width: 468px;
}
</style>