import { usePageContext } from "../../App";

const ShowPage = () => {
  const { currentPage } = usePageContext();
  console.log(currentPage);

  return <h1>{currentPage}</h1>;
};

export default ShowPage;
