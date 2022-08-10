
export default {

    getMessagesFromMemory() {
        if (localStorage.getItem("chatRoomMessages")) {
            try {
                return  JSON.parse(
                    localStorage.getItem("chatRoomMessages")
                );
            } catch (e) {
                localStorage.removeItem("chatRoomMessages");
            }
        }
    },
}