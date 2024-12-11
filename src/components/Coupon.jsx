const Coupon = ({ data }) => {
  return (
    <div className="mt-40">
      <div className="titleClass">쿠폰 내역</div>
      {data.content && !data.is_used ? (
        <div className="listGrayClass">ㆍ{data.content}</div>
      ) : (
        <div className="listGrayClass">ㆍ쿠폰 내역이 없습니다.</div>
      )}
    </div>
  );
};

export default Coupon;
