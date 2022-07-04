import { LayoutIntern } from '@components/LayoutIntern';
import { GridWrapper, Header, Sidebar } from '@elements/organisms';

export const Home = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <Header />
      <LayoutIntern>
        <h1 className="text-heading-01 font-semibold">Home</h1>
      </LayoutIntern>
    </GridWrapper>
  );
};
