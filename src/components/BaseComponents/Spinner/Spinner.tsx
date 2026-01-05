import { cn } from "lib/utils";

function FallbackSpinner(props: { className?: string }) {
  const { className } = props;

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-9999 flex h-screen w-screen flex-col items-center justify-center bg-ftBackground",
        className,
      )}
    >
      <img
        alt="Fintech Logo"
        src="/images/Fintech.svg"
        className="min-w-1/2 md:min-w-1/4 max-w-2/3 mt-24"
      />

      <img
        alt="Spinner"
        src="/images/Bouncing-Circles.svg"
        className="w-12 md:w-24 mt-8"
      />
    </div>
  );
}

export default FallbackSpinner;
