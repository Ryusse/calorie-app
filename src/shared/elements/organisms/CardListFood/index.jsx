import { CardFood } from '@elements/molecules/CardFood';

export const CardListFood = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="hidden grid-cols-[1fr_6rem_6rem_7.5rem] gap-[3vw] rounded-[5px] bg-primary-grey-300 py-3 px-4 text-center shadow-01 md:grid xl:gap-[2rem]">
        <p className=" text-left  text-paragraph-01 font-medium text-primary-grey-900">
          Nombre de comida
        </p>
        <p className="text-paragraph-01 font-medium text-primary-grey-900">
          Calorias
        </p>
        <p className="text-paragraph-01 font-medium text-primary-grey-900">
          Activo
        </p>
        <p className="text-paragraph-01 font-medium text-primary-grey-900">
          Fecha
        </p>
      </div>
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
    </div>
  );
};
