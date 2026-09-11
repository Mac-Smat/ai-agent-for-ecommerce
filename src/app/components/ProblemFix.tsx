interface ProblemFixProps {
  onGetApiKey: () => void;
}

export default function ProblemFix({ onGetApiKey: _onGetApiKey }: ProblemFixProps) {
  return (
    <section className="w-full max-w-10xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex flex-col items-center text-center">

        {/* Headline — exact copy from Figma node 19-14 */}
        <h2 className="text-[28px] sm:text-[30px] md:text-[40px] leading-[1.2] font-semibold tracking-tight text-neutral-900 max-w-10xl">
          Instead of making shoppers do all the work, let them just ask, type a question or upload a photo, and get an instant answer pulled straight from your actual inventory, not a script, not a guess.
        </h2>

        {/* Two empty placeholder cards from Figma node 19-14 */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-7xl">
          <div className="aspect-[6/5] rounded-3xl bg-neutral-300" max-w-md mx-auto />
          <div className="aspect-[6/5] rounded-3xl bg-neutral-300" />
        </div>

      </div>
    </section>
  );
}
