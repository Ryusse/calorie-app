import { LayoutIntern } from '@components/LayoutIntern';
import { LineChart } from '@elements/molecules';
import {
  CardListFood,
  GridWrapper,
  Header,
  Sidebar,
} from '@elements/organisms';

export const Statistics = () => {
  return (
    <main>
      <GridWrapper className="bg-primary-grey-700">
        <Sidebar />
        <Header />
        <LayoutIntern>
          <div>
            <h1 className="text-heading-01 font-semibold">Hola, Marco.</h1>
            <p className="mt-1 font-medium text-primary-grey-500">
              Aqui encontrarás tus estadisticas de calorias diarias.
            </p>
          </div>

          <div className="mt-12 rounded-[10px] bg-primary-grey-900 p-4 shadow-01 lg:max-w-[40rem] lg:p-8">
            <h2 className="mb-9 text-heading-03 font-semibold">
              Calorias consumidas
            </h2>
            <LineChart />
          </div>
          <div className="relative mt-12">
            <h1 className="mb-4 text-heading-01 font-semibold lg:mb-10">
              Alimentos
            </h1>
            <CardListFood />
          </div>
        </LayoutIntern>
      </GridWrapper>
    </main>
  );
};
