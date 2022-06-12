import { CardFood } from '@elements/molecules/CardFood';
import { GridWrapper, Sidebar } from '@elements/organisms';

export const Food = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <main className=" bg-primary-grey-700 col-start-3 md:col-span-6 lg:col-span-10 py-14 px-10">
        <h1 className="text-heading-01 font-semibold mb-[3rem]">Alimentos</h1>

        <div className="flex flex-col gap-5">
          <div className="text-center grid gap-[3vw] grid-cols-[2rem_1fr_4rem_4rem_7.5rem] max-w-[820px] py-3 px-4 bg-primary-grey-300 shadow-01 rounded-[5px] ">
            <p className="text-primary-grey-900 font-semibold">Id</p>
            <p className="text-primary-grey-900 font-semibold">
              Nombre de comida
            </p>
            <p className="text-primary-grey-900 font-semibold">Calorias</p>
            <p className="text-primary-grey-900 font-semibold">Activo</p>
            <p className="text-primary-grey-900 font-semibold">Fecha</p>
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
