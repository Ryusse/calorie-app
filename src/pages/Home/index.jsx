import { GridWrapper, Sidebar } from '@elements/organisms';

export const Home = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <main className=" bg-primary-grey-700 col-start-3 md:col-span-6 lg:col-span-10 py-14 px-10">
        <h1 className="text-heading-01 font-semibold">Home</h1>
      </main>
    </GridWrapper>
  );
};
