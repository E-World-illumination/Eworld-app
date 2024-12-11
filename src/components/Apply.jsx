const Apply = ({ data }) => {
  return (
    <div className="mt-50">
      {data ? (
        <>
          <div className="titleClass">응모 내역</div>
          <div className="listRedClass">ㆍ응모 내역이 있습니다.</div>
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
