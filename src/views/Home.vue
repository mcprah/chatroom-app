<template>
  <div id="chatRoom">
    <div class="container">
      <div class="row bg-primary" id="appBar">
        <div class="col-md-12 text-light">
          <!-- <h1 class="h5 m-0 fw-bold">CHATRUM</h1> -->
        </div>
      </div>
      <div class="row bg-light" id="appBody">
        <div class="col-md-12 d-flex flex-column">
          <div class="flex-grow-1" id="messageBoard">
            <MessageTile userName="Mark" />
            <MessageTile :fromSelf="true" userName="Beatrice" />
          </div>
          <ChatBar class="mb-3 mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatBar from "@/components/ChatBar.vue";
import MessageTile from "@/components/MessageTile.vue";

export default {
  name: "Home",
  components: { ChatBar, MessageTile },
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
    height: calc(100vh - 10px);

    #messageBoard {
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: flex-end;
    }
  }
}
</style>

