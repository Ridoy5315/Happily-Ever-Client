import { Hearts } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center gap-8 h-screen">
      <Hearts
        height="80"
        width="80"
        color="#800000"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <span className="text-3xl font-medium text-maroon-color">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
