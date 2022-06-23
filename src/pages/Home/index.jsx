import { LayoutIntern } from '@components/LayoutIntern';
import { GridWrapper, Sidebar } from '@elements/organisms';

export const Home = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <LayoutIntern>
        <h1 className="text-heading-01 font-semibold">Home</h1>
      </LayoutIntern>
    </GridWrapper>
  );
};
