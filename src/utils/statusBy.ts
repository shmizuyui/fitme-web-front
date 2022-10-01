export const statusBy = (status: string) => {
  switch (status) {
    case "requested":
      return "承認待ち";
    case "approved":
      return "承認";
    case "rejected":
      return "拒否";
    case "canceled":
      return "キャンセル";
    default:
      return "その他";
  }
};
