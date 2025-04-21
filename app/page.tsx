import Lane from "./Lane";
import Square from "./Square";

const page = () => {
  return (
    <>
      <Lane easing="ease-in">
        <Square easing="ease-in" duration={2000} />
      </Lane>
      <Lane easing="ease-out">
        <Square easing="ease-out" duration={2000} />
      </Lane>
      <Lane easing="ease-in-out">
        <Square easing="ease-in-out" duration={2000} />
      </Lane>
      <Lane easing="linear">
        <Square easing="linear" duration={2000} />
      </Lane>
    </>
  );
};

export default page;
