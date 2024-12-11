const StampList = ({ stampCount }) => {
  return (
    <div className="mt-40 grid w-280 grid-cols-2 gap-x-40 gap-y-30">
      {Array.from({ length: stampCount }).map((_, i) => (
        <div key={i}>
          <img src="/stamp/stamp_on.png" alt="스탬프on" width="120" />
        </div>
      ))}
      {Array.from({ length: 6 - stampCount }).map((_, i) => (
        <div>
          <img src="/stamp/stamp_off.png" alt="스탬프off" width="120" />
        </div>
      ))}
    </div>
  );
};

export default StampList;
