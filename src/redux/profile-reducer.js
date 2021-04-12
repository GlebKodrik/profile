let initialState = {
  name: "Глеб Кодрик",
  avatar:
    "https://sun9-57.userapi.com/impg/8Jvhgj25WpcvnJQYY3go1M8qoA8H54lGB3e3ZQ/obEK0XlX-NA.jpg?size=1334x1334&quality=96&sign=667f4ecb98f4a84360fe8040773daef2&type=album",
  description: [
    { id: 1, title: "Основное", text: "Я Глеб, мне 19 лет, живу в Санкт-Петербурге, учусь в Политехническом колледже городского хозяйства" },
    { id: 2, title: "Работа", text: "Работаю администратором в ГазЛофте , Учусь на программиста" },
    { id: 3, title: "Увлечения", text: "Играю в компьютерные игры, люблю смотреть фильмы, много занимаюсь программированием" },
    { id: 4, title: "Характер", text: "Очень веселый и общительный, быстро нахожу общий язык с людьми, целеустремленный, ответственный" },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer;
