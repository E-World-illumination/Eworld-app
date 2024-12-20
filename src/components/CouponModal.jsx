const CouponModal = ({ content }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div>쿠폰정보</div>
      <img src="/barcode.jpg" alt="" />
      <p className="text-12">{content}</p>
    </div>
  );
};

export default CouponModal;
