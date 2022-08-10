<template>
  <div id="chatRoom">
    <div class="container">
      <div class="row bg-primary" id="appBar">
        <div class="col-md-12 text-light">
          <!-- <h1 class="h5 m-0 fw-bold">CHATRUM</h1> -->
        </div>
      </div>
      <div class="row bg-light" id="appBody">
        <div
          class="col-md-12 d-flex flex-column"
          style="height: calc(100vh - 8px)"
        >
          <div class="message-board-wrapper">
            <div class="overflow-container">
              <div class="" id="messageBoard">
                <MessageTile
                  v-for="(messageData, idx) in arrMessages"
                  :key="idx"
                  :id="(tileElementId = `tile${idx + 1}`)"
                  :fromSelf="tabUser.uid == messageData.user.id"
                  :userName="messageData.user.name"
                  :message="messageData.message"
                />
              </div>
              <div id="scrollTarget"></div>
            </div>
          </div>

          <ChatBar class="mb-3" @sendMessage="handleMessageChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatBar from "@/components/ChatBar.vue";
import MessageTile from "@/components/MessageTile.vue";

export default {
  name: "Chatroom",
  components: { ChatBar, MessageTile },
  data() {
    return {
      arrMessages: [],
      tileElementId: "",
    };
  },
  mounted() {
    this.arrMessages = this.$helpers.getMessagesFromMemory();
    this.refreshChat();
  },
  computed: {
    tabUser: function () {
      return {
        uid: this.$route.query.uid,
        name: this.userName,
      };
    },
  },
  watch: {
    arrMessages: function (value) {
      return value;
    },
  },
  methods: {
    scrollToBottom() {
      var scrollTarget = document.getElementById(this.tileElementId);
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "end" });
    },
    handleMessageChange(messages) {
      this.arrMessages = messages;
      this.scrollToBottom();
    },
    refreshChat() {
      setInterval(async function () {
        if (localStorage.getItem("chatRoomMessages")) {
          let messagesFromLocalStorage = [];
          try {
            messagesFromLocalStorage = await JSON.parse(
              localStorage.getItem("chatRoomMessages")
            );
            this.arrMessages = await messagesFromLocalStorage;
          } catch (e) {
            // console.log(e);
          }
        }
      }, 5000);
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

  #appBody {
    .message-board-wrapper {
      display: flex;
      flex: 1;
      min-height: 0px;
      align-items: flex-end;

      .overflow-container {
        flex: 1;
        overflow: auto;
      }

      #messageBoard {
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: scroll;
        max-height: calc(100vh - 120px);
        padding: 12px;
      }
    }
  }
}
</style>

