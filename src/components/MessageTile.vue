<template>
  <div class="message-tile">
    <div class="message shadow-sm" :class="[fromSelf ? 'order-1' : 'order-2']">
      <small class="text-primary" v-if="!fromSelf">{{ userName }}</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
    </div>
    <div
      class="user-avatar bg-secondary text-light fw-bold"
      :class="[fromSelf ? 'order-2' : 'order-1']"
    >
      {{ userInitial }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageTile",
  props: {
    fromSelf: { type: Boolean, default: false },
    userName: { type: String, required: true },
  },
  computed: {
    userInitial() {
      return this.userName[0].toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>