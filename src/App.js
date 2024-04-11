import Routing from "./Routing";
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";

const withRouter = (component) => () => {
    return(
        <BrowserRouter>
            <Suspense fallback={<>Loading...</>}>{component()}</Suspense>
        </BrowserRouter>
    )
}
function App() {
  return (
      <>
          <Routing/>
      </>
  );
}

export default withRouter(App);
