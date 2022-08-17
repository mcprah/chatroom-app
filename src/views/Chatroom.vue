<template>
  <div id="chatRoom">
    <div class="container">
      <div class="row bg-primary" id="appBar"></div>
      <div class="row bg-light" id="appBody">
        <div
          class="col-md-12 d-flex flex-column"
          style="height: calc(100vh - 8px)"
        >
          <MessageBoard :user="tabUser" :key="refreshToken" ref="scrollToMe" />

          <ChatBar class="mb-3" @sendMessage="handleMessageChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatBar from "@/components/ChatBar.vue";
import MessageBoard from "@/components/MessageBoard.vue";

export default {
  name: "Chatroom",
  components: { ChatBar, MessageBoard },
  data() {
    return {
      arrMessages: [],
      refreshToken: 0,
      tileElementId: "",
    };
  },
  watch: {
    arrMessages: function (value) {
      return value;
    },
  },
  mounted() {
    this.arrMessages = this.$helpers.getMessagesFromMemory();
    this.refreshMessageBoard();
  },
  computed: {
    tabUser: function () {
      return {
        uid: this.$route.query.uid,
        name: this.userName,
      };
    },
  },
  methods: {
    handleMessageChange(messages) {
      this.arrMessages = messages;
      this.forceMessageBoardRerender();
    },
    forceMessageBoardRerender() {
      this.refreshToken += 1;
    },
    refreshMessageBoard() {
      setInterval(this.forceMessageBoardRerender, 5000);
    },
  },
};
</script>


<style lang="scss" scoped>
#chatRoom {
  display: flex;
  justify-content: center;
  max-width: 468px;
  width: 468px;

  #appBar {
    height: 10px;
    display: flex;
    align-items: center;
  }

  // #appBody {
  //   .message-board-wrapper {
  //     display: flex;
  //     flex: 1;
  //     min-height: 0px;
  //     align-items: flex-end;

  //     .overflow-container {
  //       flex: 1;
  //       overflow: auto;
  //     }

  //     #messageBoard {
  //       display: flex;
  //       flex-direction: column;
  //       gap: 8px;
  //       overflow-y: scroll;
  //       max-height: calc(100vh - 120px);
  //       padding: 12px;
  //     }
  //   }
  // }
}
</style>

