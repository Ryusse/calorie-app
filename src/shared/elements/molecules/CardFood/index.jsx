export const CardFood = ({ food }) => {
  return (
    <div className="lg:gap[2rem] grid grid-cols-[1.3fr_0.7fr] grid-rows-[1fr_1fr_1fr] gap-[3vw] rounded-[5px] bg-primary-grey-900 py-3 px-4 text-center shadow-01 md:grid-cols-[1fr_6rem_6rem__7.5rem] md:grid-rows-[auto] xl:gap-[2rem]">
      <p className="col-start-1 row-start-2 my-auto text-left text-paragraph-03 font-semibold md:col-start-1 md:row-start-1 md:text-paragraph-01 md:font-normal ">
        {food.nombres}
      </p>
      <p className="col-start-2 row-span-2 row-start-2 my-auto text-right text-subheading-02 font-bold md:col-start-2 md:row-span-1 md:row-start-1 md:text-center md:text-paragraph-01 md:font-normal">
        {food.calorias}
      </p>
      <p className="col-start-1 row-start-3 max-w-[8.5rem] rounded-[5px] bg-feedback-success-200 py-1 px-8 font-medium text-feedback-success-100 md:col-start-3 md:row-start-1 md:py-1 md:px-3 md:text-paragraph-02">
        Si
      </p>
      <p className="col-start-1 row-start-1 text-left text-paragraph-03 font-medium text-primary-grey-300 md:col-start-4 md:row-start-1 md:my-auto md:text-center md:text-paragraph-02 md:font-normal md:text-primary-grey-200">
        15/03/21 10:00
      </p>
    </div>
  );
};
