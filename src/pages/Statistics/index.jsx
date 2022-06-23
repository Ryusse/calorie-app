import { LayoutIntern } from '@components/LayoutIntern';
import { LineChart } from '@elements/molecules';
import { GridWrapper, Sidebar } from '@elements/organisms';

export const Statistics = () => {
  return (
    <main>
      <GridWrapper className="bg-primary-grey-700">
        <Sidebar />
        <LayoutIntern>
          <div>
            <h1 className="text-heading-01 font-semibold">Hola, Marco.</h1>
            <p className="mt-1 font-medium text-primary-grey-300">
              Aqui encontrarás tus estadisticas de calorias diarias.
            </p>
          </div>

          <div className="mt-12 max-w-[40rem] rounded-[10px] bg-primary-grey-900 py-9 px-10 shadow-01">
            <h2 className="mb-9 text-heading-03 font-semibold">
              Calorias consumidas
            </h2>
            <LineChart />
          </div>
        </LayoutIntern>
      </GridWrapper>
    </main>
  );
};
