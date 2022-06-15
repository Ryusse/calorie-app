import { CardListFood, GridWrapper, Sidebar } from '@elements/organisms';

export const Food = () => {
  return (
    <>
      <GridWrapper className="bg-primary-grey-700">
        <Sidebar />
        <main className="col-span-4 bg-primary-grey-700 py-14 px-4 md:col-span-8 md:px-10 lg:col-span-10 lg:col-start-3">
          <h1 className="mb-[3rem] text-heading-01 font-semibold">Alimentos</h1>
          <CardListFood />
        </main>
      </GridWrapper>
    </>
  );
};
