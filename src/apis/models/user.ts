export type User = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  name_kana: string;
  gender: string;
  image?: string;
  allow_password_change: boolean;
};
