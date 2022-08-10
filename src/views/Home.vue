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
            <div class="message-tile">
              <div class="message shadow-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  eum tempore corrupti?
                </p>
              </div>
              <div class="user-avatar bg-secondary text-light fw-bold">OO</div>
            </div>
            <div class="message-tile">
              <div class="message shadow-sm order-2">
                <small class="text-primary">Username</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
              </div>
              <div class="user-avatar bg-secondary text-light fw-bold order-1">
                MA
              </div>
            </div>
          </div>
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

                  <button class="btn bt-lg btn-dark" type="submit">
                    Enter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
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
      .message-tile {
        display: flex;
        justify-content: space-between;
        .message {
          max-width: 425px;
          width: calc(100% - 64px);
          background: #ffffff;
          padding: 12px 16px;
          border-radius: 8px;
          small {
            margin-bottom: 8px;
          }
        }

        .user-avatar {
          height: 48px;
          width: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 120px;
        }
      }
    }
    #chatBar {
      margin-bottom: 18px;
      margin-top: 38px;
      border-radius: 26px;

      input {
        outline: none;
      }
    }
  }
}
</style>

