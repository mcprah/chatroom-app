<template>
  <div class="message-board-wrapper">
    <div class="overflow-container">
      <div class="" id="messageBoard">
        <MessageTile
          v-for="(messageData, idx) in messages"
          :key="idx"
          :id="(tileElementId = `tile${idx + 1}`)"
          :fromSelf="user.uid == messageData.user.id"
          :userName="messageData.user.name"
          :message="messageData.message"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MessageTile from "@/components/MessageTile.vue";

export default {
  name: "MessageBoard",
  components: { MessageTile },
  props: {
    user: { type: Object },
  },
  data() {
    return {
      messageBoardScrollHeight: 0,
    };
  },
  computed: {
    messages: function () {
      return this.$helpers.getMessagesFromMemory();
    },
    messageBoardEl: function () {
      return document.getElementById("messageBoard");
    },
  },
  mounted() {
    this.scrollToEnd();
  },
  methods: {
    scrollToEnd() {
      this.messageBoardEl.scrollTop = this.messageBoardEl.scrollHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
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
    // gap: 28px;
    overflow-y: scroll;
    max-height: calc(100vh - 120px);
    padding: 12px;
  }
}
</style>