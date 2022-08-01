export const genderBy = (gender: string | undefined) => {
  switch (gender) {
    case "male":
      return "男性";
    case "female":
      return "女性";
    default:
      return "どちらでもない";
  }
};
