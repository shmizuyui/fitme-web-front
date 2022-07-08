export type Lesson = {
  id: number;
  title: string;
  category: string;
  price: number;
  time: number;
  content: string;
  trainer: {
    image: string;
    name: string;
    gender: string;
  }
};
