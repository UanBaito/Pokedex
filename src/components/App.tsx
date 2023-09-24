import Mainpage from "./Mainpage";
import { Suspense } from "react";
import PageLoader from "./PageLoader";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="bg-gray-300 text-slate-950">
        <Mainpage />
      </div>
    </Suspense>
  );
}

export default App;
