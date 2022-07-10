import { LayoutIntern } from '@components/LayoutIntern';
import {
  CardListFood,
  GridWrapper,
  Header,
  Sidebar,
} from '@elements/organisms';

export const Food = () => {
  return (
    <>
      <GridWrapper className="bg-primary-grey-700">
        <Sidebar />
        <Header />
        <LayoutIntern className="relative">
          <h1 className="mb-4 text-heading-01 font-semibold lg:mb-10">
            Alimentos
          </h1>
          <CardListFood />
        </LayoutIntern>
      </GridWrapper>
    </>
  );
};
