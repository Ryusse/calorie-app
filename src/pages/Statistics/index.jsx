import { useRef, useState, useEffect } from 'react';

import { LayoutIntern } from '@components/LayoutIntern';
import { LineChart } from '@elements/molecules';
import { GridWrapper, Header, Sidebar } from '@elements/organisms';
import { useReportService } from '../../services';

export const Statistics = () => {

  const { useGetReport } = useReportService();

  const [items, setItems] = useState({nombres: 'Marco'});

  const [count, setCount] = useState(0);

  

  const [scores, setScores] = useState([]);

  const [labelsMobile, setLabelsMobile] = useState([]);

  const [labelsDesktop, setLabelsDesktop] = useState([]);
  const getData = async () => {
    try {
      const respUser = await useGetReport(items.idUsuario);
      let days= []
      let data = []
      console.log(respUser, 'reports respons 2e');
      for (let i = 0; i < respUser.length; i++) {
        const element = respUser[i];
        days.push(element.dia + '-' + element.mes + '-' + element.año)
        data.push(element.porcentaje)
      }
      setScores(data)
      setLabelsDesktop(days)
      setLabelsMobile(days)
      setCount(days.length)
    } catch (e) {
      console.log(e);
    }
  }

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
            <h1 className="text-heading-01 font-semibold">Hola, {items.nombres}.</h1>
            <p className="mt-1 font-medium text-primary-grey-300">
              Aqui encontrarás tus estadisticas de calorias diarias.
            </p>
          </div>

          <div className="mt-12 rounded-[10px] bg-primary-grey-900 p-4 shadow-01 lg:max-w-[40rem] lg:p-8">
            <h2 className="mb-9 text-heading-03 font-semibold">
              Calorias consumidas
            </h2>
            {count && <LineChart labelsMobile={labelsMobile} labelsDesktop={labelsDesktop} scores={scores}/>}
            
          </div>
        </LayoutIntern>
      </GridWrapper>
    </main>
  );
};
