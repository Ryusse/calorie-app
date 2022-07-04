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
        <LayoutIntern>
          <h1 className="mb-[3rem] text-heading-01 font-semibold">Alimentos</h1>
          <CardListFood />
        </LayoutIntern>
      </GridWrapper>
    </>
  );
};
