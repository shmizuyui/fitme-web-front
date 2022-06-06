export const categoryBy = (category: string) => {
  switch (category) {
    case "muscle":
      return "筋トレ";
    case "aerobic_exercise":
      return "エアロビクス";
    case "yoga":
      return "ヨガ";
    case "pilates":
      return "ピラティス";
    case "stretch":
      return "ストレッチ";
    case "meal_management":
      return "食事管理";
    case "counseling":
      return "カウンセリング";
    default:
      return "その他";
  }
};
