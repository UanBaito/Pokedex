import Mainpage from "./Mainpage";
import { Suspense } from "react";
import PageLoader from "./PageLoader";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="bg-primary">
        <Mainpage />
      </div>
    </Suspense>
  );
}

export default App;
