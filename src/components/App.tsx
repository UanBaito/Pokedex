import Mainpage from "./Mainpage";
import { Suspense } from "react";
import PageLoader from "./PageLoader";
import { graphql, useLazyLoadQuery } from "react-relay";
import { AppQuery as AppQueryType } from "./__generated__/AppQuery.graphql";

const AppQuery = graphql`
  query AppQuery {
    ...MainpageFragment
  }
`;
function App() {
  const data = useLazyLoadQuery<AppQueryType>(AppQuery, {});
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="bg-gray-300 text-slate-950">
        <Mainpage queryData={data} />
      </div>
    </Suspense>
  );
}

export default App;
