let initialState = {
  name: "Глеб Кодрик",
  avatar:
    "https://sun9-57.userapi.com/impg/8Jvhgj25WpcvnJQYY3go1M8qoA8H54lGB3e3ZQ/obEK0XlX-NA.jpg?size=1334x1334&quality=96&sign=667f4ecb98f4a84360fe8040773daef2&type=album",
  description: [
    { id: 1, title: "Мой первый заказ", text: "ыфвафывйцвйцв" },
    { id: 2, title: "Мой первый заказ", text: "ыфвафывйцвйцв" },
    { id: 3, title: "Мой первый заказ", text: "ыфвафывйцвйцв" },
    { id: 4, title: "Мой первый заказ", text: "ыфвафывйцвйцв" },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer;
