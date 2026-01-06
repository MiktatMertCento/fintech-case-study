import { clsx } from "clsx";

import { Card } from "core/Queries/FinancialQueries/interfaces";

function CreditCardItem({ card, index }: { card: Card; index: number }) {
  const isFirst = index === 0;
  const isDark = card.color === "#000000";

  const displayBankParts = card.bank.includes("|")
    ? card.bank.split("|").map((s) => s.trim())
    : ["Fintech.", "Bank"];

  return (
    <div
      className={clsx(
        "absolute rounded-3xl transition-all duration-300 overflow-hidden border border-white/10",
        isFirst
          ? "w-full z-0 top-0 h-55"
          : "w-[90%] left-[5%] z-10 top-35 h-55 shadow-2xl backdrop-blur-md",
      )}
    >
      {!isFirst && (
        <div className="absolute inset-0 bg-linear-to-b from-white/30 via-white/80 to-white z-0" />
      )}

      <img
        src={isDark ? "/images/Black-Card.svg" : "/images/White-Card.svg"}
        alt={`${card.name} background`}
        className={clsx(
          "absolute inset-0 h-full w-full object-cover",
          isFirst ? "z-[-1]" : "z-[-1] opacity-50 hidden",
        )}
      />

      <div
        className={clsx(
          "relative flex h-full flex-col justify-between p-6 z-10",
          isDark ? "text-white" : "text-text1Color",
        )}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-baseline gap-1.5 text-sm">
              <div className="font-semibold text-opacity-90">
                {displayBankParts[0]}
              </div>
              <div>|</div>
              <div
                className={clsx(
                  "font-light",
                  isDark ? "text-white/70" : "text-text1Color/70",
                )}
              >
                {displayBankParts[1]}
              </div>
            </div>
            <div className="mt-6">
              <img src="/images/Chip.svg" alt="Chip" className="h-8 w-auto" />
            </div>
          </div>
          <div>
            <img
              src="/images/Contactless.svg"
              alt="Contactless"
              className="h-8 w-auto"
            />
          </div>
        </div>

        <div
          className={clsx(
            "flex flex-col",
            isFirst ? "items-start justify-center pb-14" : "justify-end",
          )}
        >
          <div
            className={clsx(
              "font-mono font-black tracking-widest whitespace-nowrap",
              isFirst
                ? "text-lg sm:text-xl md:text-lg 2xl:text-2xl"
                : "text-lg 2xl:text-[22px] mb-2 text-text1Color",
            )}
          >
            {card.cardNumber}
          </div>

          {!isFirst && (
            <div className="flex items-end justify-between w-full">
              <div className="text-xs font-semibold opacity-80 text-text1Color">
                {String(card.expiryMonth).padStart(2, "0")}/
                {String(card.expiryYear).slice(-2)}
              </div>
            </div>
          )}
        </div>

        <img
          src={isFirst ? "/images/mastercard.png" : "/images/visa.png"}
          alt="Brand Logo"
          className="absolute bottom-6 right-6 h-5 w-auto object-contain"
        />
      </div>
    </div>
  );
}

export default CreditCardItem;
