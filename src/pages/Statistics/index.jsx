import { LineChart } from '@elements/molecules';
import { GridWrapper, Sidebar } from '@elements/organisms';

export const Statistics = () => {
  return (
    <main>
      <GridWrapper>
        <Sidebar />
        <main className=" bg-primary-grey-700 col-start-3 md:col-span-6 lg:col-span-10 py-14 px-10">
          <div>
            <h1 className="text-heading-01 font-semibold">Hola, Marco.</h1>
            <p className="text-primary-grey-300 font-medium mt-1">
              Aqui encontrarás tus estadisticas de calorias diarias.
            </p>
          </div>

          <div className="mt-12 shadow-01 rounded-[10px] py-9 px-10 max-w-[40rem] bg-primary-grey-900">
            <h2 className="text-heading-03 mb-9 font-semibold">
              Calorias consumidas
            </h2>
            <LineChart />
          </div>
        </main>
      </GridWrapper>
    </main>
  );
};
