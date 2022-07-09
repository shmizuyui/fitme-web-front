interface Props {
  open: boolean;
  className?: string;
  errorMessage: string;
}

export const FormErrorMessage = ({ open, className, errorMessage }: Props) => {
  return (
    <>
      {open && (
        <div className="w-4/5 mx-auto text-sm text-red-500">
          <p className={className}>{errorMessage}</p>
        </div>
      )}
    </>
  );
};
