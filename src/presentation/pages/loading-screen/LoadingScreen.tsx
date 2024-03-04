import { useLoadingStore } from "../../store/useLoadingStore";
import "./loading.css";

const LoadingScreen = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    isLoading && (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    )
  );
};

export default LoadingScreen;
