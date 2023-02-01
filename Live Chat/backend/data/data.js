const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Rash",
        email: "rash123@example.com",
      },
      {
        name: "Ash",
        email: "ash456@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Rash",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Ash",
        email: "ash456@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Haya",
        email: "haya09@example.com",
      },
      {
        name: "Ash",
        email: "ash456@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Haya",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Rash",
        email: "rash123@example.com",
      },
      {
        name: "Ash",
        email: "ash456@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "Ash",
        email: "ash456@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Rash",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Rash",
        email: "rash123@example.com",
      },
      {
        name: "Ash",
        email: "ash456@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = { chats };
