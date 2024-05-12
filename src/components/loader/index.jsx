import { memo } from "react";
import "./loader.css";
const LoaderComponent = () => {
  return (
    <div className="loader">
      <div></div>
    </div>
  );
};

export const Loader = memo(LoaderComponent);
