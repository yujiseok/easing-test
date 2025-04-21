const Lane = ({
  children,
  easing,
}: {
  children: React.ReactNode;
  easing: "ease-in" | "ease-out" | "ease-in-out" | "linear";
}) => {
  return (
    <div className="w-full">
      <div>
        <p className="text-lg text-neutral-600 mb-4">{easing}</p>
      </div>
      <div className="border border-neutral-300 rounded-lg py-6 relative w-full">
        {children}
      </div>
    </div>
  );
};

export default Lane;
