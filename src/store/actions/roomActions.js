import { ADD_ROOM } from "./actionTypes";
export const addRoom = (room) => {
  return {
    type: ADD_ROOM,
    payload: {
      name: room.room_name,
      room_owner: room.room_owner,
      chat: [{ owner: "eiei", text: "สวัสดีครับ" }],
    },
  };
};
