<template>
  <div
    class="message-tile"
    :class="[fromSelf ? 'justify-content-end' : 'justify-content-start']"
  >
    <div
      class="message shadow-sm"
      :class="[fromSelf ? 'order-1 text-right from-self' : 'order-2']"
    >
      <small class="text-primary" v-if="!fromSelf">{{ userName }}</small>
      <p class="m-0">{{ message }}</p>
    </div>
    <div
      class="user-avatar bg-secondary text-light fw-bold"
      :class="[fromSelf ? 'order-2 ms-2 ' : 'order-1 me-2']"
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
    message: { type: String, required: true },
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
  position: relative;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  &:last-of-type {
    margin-bottom: 18px;
  }

  .message {
    max-width: 284px;
    background: #ffffff;
    padding: 12px 16px;
    border-radius: 18px;
    border-top-left-radius: 0;

    small {
      margin-bottom: 8px;
    }
    &.from-self {
      border-top-right-radius: 0;
      border-top-left-radius: 18px;
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