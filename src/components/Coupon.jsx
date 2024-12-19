import { useRef, useState } from "react";
import CouponModal from "./CouponModal";

const Coupon = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="mt-40">
      <div className="titleClass">쿠폰 내역</div>
      {data?.name && data.is_used === null ? (
        <div
          className="cursor-pointer px-10 pt-10 text-[15px] text-home"
          onClick={() => setIsModalOpen(true)}
        >
          ㆍ{data.name}
        </div>
      ) : (
        <div className="listGrayClass">ㆍ쿠폰 내역이 없습니다.</div>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <div
            className="w-96 rounded-lg bg-white p-6 shadow-lg"
            ref={modalRef}
          >
            <CouponModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
