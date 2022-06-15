import { CardFood } from '@elements/molecules/CardFood';

export const CardListFood = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid max-w-[820px] grid-cols-[2rem_1fr_4rem_4rem_7.5rem] gap-[3vw] rounded-[5px] bg-primary-grey-300 py-3 px-4 text-center shadow-01 ">
        <p className="font-semibold text-primary-grey-900">Id</p>
        <p className="font-semibold text-primary-grey-900">Nombre de comida</p>
        <p className="font-semibold text-primary-grey-900">Calorias</p>
        <p className="font-semibold text-primary-grey-900">Activo</p>
        <p className="font-semibold text-primary-grey-900">Fecha</p>
      </div>
      <CardFood />
      <CardFood />
      <CardFood />
      <CardFood />
    </div>
  );
};
