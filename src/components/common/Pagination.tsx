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
    <div className="flex justify-center items-center">
      {!isFirstPage && (
        <button className="border-2 m-2 p-1" onClick={onPageBack}>
          前へ
        </button>
      )}
      {!isLastPage && (
        <button className="border-2 m-2 p-1" onClick={onPageNext}>
          次へ
        </button>
      )}
    </div>
  );
};
