type BannerProps = {
  heading: string;
};

function Banner({ heading }: BannerProps) {
  return (
    <header className="sticky top-0 z-10 flex h-40 bg-black px-24 pt-20 pb-8 text-white">
      <div className="flex w-full max-w-screen-xl items-end">
        <h1 className="text-2xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
          {heading}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
