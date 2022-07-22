import { useEffect, useState } from 'react';

import { LayoutIntern } from '@components/LayoutIntern';
import { Button } from '@elements/atoms';
import Icon from '@elements/atoms/Icon';
import { LineChart } from '@elements/molecules';
import {
  CardListFood,
  GridWrapper,
  Header,
  ModalAddFood2,
  Sidebar,
} from '@elements/organisms';

import { useReportService } from '../../services';

export const Statistics = () => {
  const { useGetReport } = useReportService();

  const [items, setItems] = useState({ nombres: 'Marco' });
  const [count, setCount] = useState(0);
  const [scores, setScores] = useState([]);
  const [labelsMobile, setLabelsMobile] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [labelsDesktop, setLabelsDesktop] = useState([]);

  const getData = async () => {
    try {
      const respUser = await useGetReport(items.idUsuario);
      const days = [];
      const data = [];
      console.log(respUser, 'reports respons 2e');
      for (let i = 0; i < respUser.length; i++) {
        const element = respUser[i];
        days.push(element.dia + '-' + element.mes + '-' + element.año);
        data.push(element.porcentaje);
      }
      setScores(data);
      setLabelsDesktop(days);
      setLabelsMobile(days);
      setCount(days.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
      getData();
    }
  }, []);

  return (
    <main>
      <GridWrapper className="bg-primary-grey-700">
        <Sidebar />
        <Header />
        <LayoutIntern>
          <div>
            <h1 className="text-heading-01 font-semibold">
              Hola, {items.nombres}.
            </h1>
            <p className="mt-1 font-medium text-primary-grey-300">
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
            <div className="mb-4 flex justify-between lg:mb-10">
              <h1 className="text-heading-01 font-semibold">Alimentos</h1>

              <Button
                onClick={() => setOpenModal(!openModal)}
                classButton="primary"
                className="hidden !max-w-[10rem] lg:block"
              >
                Añadir
              </Button>

              <Button
                onClick={() => setOpenModal(!openModal)}
                classButton="rounded"
                className="fixed bottom-5 right-5 lg:hidden"
              >
                <Icon name="icAdd" className="h-5 w-5" />
              </Button>
            </div>

            <CardListFood
              openModal={openModal}
              onClose={() => setOpenModal(false)}
            >
              <ModalAddFood2 />
            </CardListFood>
            {count && (
              <LineChart
                labelsMobile={labelsMobile}
                labelsDesktop={labelsDesktop}
                scores={scores}
              />
            )}
          </div>
        </LayoutIntern>
      </GridWrapper>
    </main>
  );
};
