export type User = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  name_kana: string;
  gender: string;
  avatar?: string;
  allow_password_change: boolean;
};
