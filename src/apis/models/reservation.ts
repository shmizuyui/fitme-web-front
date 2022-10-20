export type Reservation = {
  id: number;
  start_at: Date;
  lesson_id: number;
  user_id: number;
  status: string;
  lesson: {
    time: number;
    title: string;
    trainer: {
      name: string;
    };
  };
};
