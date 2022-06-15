import { GridWrapper, Sidebar } from '@elements/organisms';

export const Home = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <main className="col-start-3 bg-primary-grey-700 py-14 px-10 md:col-span-6 lg:col-span-10">
        <h1 className="text-heading-01 font-semibold">Home</h1>
      </main>
    </GridWrapper>
  );
};
