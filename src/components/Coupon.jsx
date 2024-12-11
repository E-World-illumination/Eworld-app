const Coupon = ({ data }) => {
  return (
    <div className="mt-50">
      {data ? (
        <>
          <div className="titleClass">쿠폰 내역</div>
          <div className="listGrayClass">ㆍ음료수 교환권</div>
        </>
      ) : (
        <>
          <div className="titleClass">쿠폰 내역</div>
          <div className="listGrayClass">ㆍ쿠폰 내역이 없습니다.</div>
        </>
      )}
    </div>
  );
};

export default Coupon;
