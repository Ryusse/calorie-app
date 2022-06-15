import { CardFood } from '@elements/molecules/CardFood';
import { GridWrapper, Sidebar } from '@elements/organisms';

export const Food = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <main className="col-start-3 bg-primary-grey-700 py-14 px-10 md:col-span-6 lg:col-span-10">
        <h1 className="mb-[3rem] text-heading-01 font-semibold">Alimentos</h1>

        <div className="flex flex-col gap-5">
          <div className="grid max-w-[820px] grid-cols-[2rem_1fr_4rem_4rem_7.5rem] gap-[3vw] rounded-[5px] bg-primary-grey-300 py-3 px-4 text-center shadow-01 ">
            <p className="font-semibold text-primary-grey-900">Id</p>
            <p className="font-semibold text-primary-grey-900">
              Nombre de comida
            </p>
            <p className="font-semibold text-primary-grey-900">Calorias</p>
            <p className="font-semibold text-primary-grey-900">Activo</p>
            <p className="font-semibold text-primary-grey-900">Fecha</p>
          </div>
          <CardFood />
          <CardFood />
          <CardFood />
          <CardFood />
        </div>
      </main>
    </GridWrapper>
  );
};
