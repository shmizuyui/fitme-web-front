import {Lesson} from './lesson';

export type Trainer = {
  id: number;
  name: string;
  name_kana: string;
  gender: string;
  history_year: number;
  career: string;
  image: string;
  message: string;
  lessons: Lesson[];
};
