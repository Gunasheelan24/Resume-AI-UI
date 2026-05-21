import React from "react";
import { GridLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-1/2">
      <GridLoader
        size={"20"}
        color="#111344"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </main>
  );
};

export default Loader;
