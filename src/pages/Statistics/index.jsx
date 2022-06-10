import { LineChart } from '@elements/molecules'
import { GridWrapper, Header } from '@elements/organisms'

export const Statistics = () => {
  return (
    <>
      <Header />
      <main>
        <GridWrapper>
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <LineChart />
          </div>
        </GridWrapper>
      </main>
    </>
  )
}
