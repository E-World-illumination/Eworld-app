const Coupon = ({ data }) => {
  if (!data) {
    data = false;
  }
  return (
    <div className="mt-40">
      <div className="titleClass">쿠폰 내역</div>
      {data.name && data.is_used === null ? (
        <div className="px-10 pt-10 text-15 text-home">ㆍ{data.name}</div>
      ) : (
        <div className="listGrayClass">ㆍ쿠폰 내역이 없습니다.</div>
      )}
    </div>
  );
};

export default Coupon;
