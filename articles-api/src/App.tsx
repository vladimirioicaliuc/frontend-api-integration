import { Fragment } from "react";
import Footer from "./components/Footer";
import Routes from "./Routes";

export default function App() {
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col px-8 md:px-24 xl:px-32 bg-background">
        <Routes/>
        <Footer />
      </div>
    </Fragment>
  );
}
