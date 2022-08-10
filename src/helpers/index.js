
export default {
    getTabUserData() {
        const userUID = this.$route.query;
        console.log(userUID);
       
    },
    getUsers() {
        if (localStorage.getItem("usersInRoom")) {
            try {
                return JSON.parse(
                    localStorage.getItem("usersInRoom")
                );
            } catch (e) {
                localStorage.removeItem("usersInRoom");
            }
        }
        return [];
    },

     getMessagesFromMemory() {
        if (localStorage.getItem("chatRoomMessages")) {
            try {
                return JSON.parse(
                    localStorage.getItem("chatRoomMessages")
                );
            } catch (e) {
                localStorage.removeItem("chatRoomMessages");
            }
        }
        return [];
    },
}