import { LayoutIntern } from '@components/LayoutIntern';
import { CardListFood, GridWrapper, Sidebar } from '@elements/organisms';

export const Food = () => {
  return (
    <>
      <GridWrapper className="bg-primary-grey-700">
        <Sidebar />
        <LayoutIntern>
          <h1 className="mb-[3rem] text-heading-01 font-semibold">Alimentos</h1>
          <CardListFood />
        </LayoutIntern>
      </GridWrapper>
    </>
  );
};
