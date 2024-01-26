import Pagination from "./Pagination"; 

export default function App({dataLength, defaultCurrent}: any) {
  return (
    <Pagination
      total={dataLength}
      defaultCurrent={defaultCurrent}
      outline={false}
      variant="flat"
      color="primary"
    />
  );
}