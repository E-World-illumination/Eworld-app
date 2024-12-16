const Apply = ({ data }) => {
  return (
    <div className="mt-40">
      {data ? (
        <>
          <div className="titleClass">응모 내역</div>
          <div className="text-home">ㆍ자유이용권 응모 완료되었습니다.</div>
        </>
      ) : (
        <>
          <div className="titleClass">응모 내역</div>
          <div className="listGrayClass">ㆍ응모 내역이 없습니다.</div>
        </>
      )}
    </div>
  );
};

export default Apply;
