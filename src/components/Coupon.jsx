const Coupon = ({ data }) => {
  console.log(data);

  if (!data) {
    data = {
      data: 1,
      is_used: 1,
    };
  }

  return (
    <div className="mt-40">
      <div className="titleClass">쿠폰 내역</div>
      {data.content && data.is_used === 0 ? (
        <div className="listGrayClass">ㆍ{data.content}</div>
      ) : (
        <div className="listGrayClass">ㆍ쿠폰 내역이 없습니다.</div>
      )}
    </div>
  );
};

export default Coupon;
