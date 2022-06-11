type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
  onPageBack: () => void;
  onPageNext: () => void;
};
export const Pagination = ({
  isFirstPage,
  isLastPage,
  onPageBack,
  onPageNext,
}: Props) => {
  return (
    <div className="py-8 flex items-center justify-center text-xl font-bold text-sky-500">
      {!isFirstPage && <button onClick={onPageBack}>＜＜ 前へ</button>}
      {!isLastPage && (
        <button onClick={onPageNext} className="ml-6">
          次へ ＞＞
        </button>
      )}
    </div>
  );
};
