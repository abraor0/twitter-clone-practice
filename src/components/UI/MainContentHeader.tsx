interface mainContentHeaderTypes {
  contentTitle?: string;
}

const MainContentHeader = ({ contentTitle }: mainContentHeaderTypes) => {
  return (
    <div className="z-10 py-4 px-3 sticky left-0 top-0 bg-white/70 backdrop-blur-md">
      <h2 className="font-bold text-lg">{contentTitle}</h2>
    </div>
  );
};

export default MainContentHeader;
