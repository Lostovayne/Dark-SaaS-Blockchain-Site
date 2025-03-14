import { CutCornerButton } from "@/components/CutCornerButton";

export const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div>
            <img src="/assets/images/logo.svg" alt="Block Logo" />
          </div>
          <div className="flex items-center gap-4">
            <CutCornerButton className="hidden md:inline-flex">Get Started</CutCornerButton>
            <div className="size-10 relative ">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
