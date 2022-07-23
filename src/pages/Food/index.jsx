import { useEffect, useState } from 'react';

import { LayoutIntern } from '@components/LayoutIntern';
import { Button } from '@elements/atoms';
import Icon from '@elements/atoms/Icon';
import {
  CardListFood,
  GridWrapper,
  Header,
  ModalAddFood,
  Sidebar,
} from '@elements/organisms';

import { useFoodService } from '../../services';

export const Food = () => {
  const [openModal, setOpenModal] = useState(false);
  const { useCreateFood } = useFoodService();
  const [userInfo, setUserInfo] = useState({});
  const [refresh, setRefresh] = useState(true);

  const onSubmit = async ({ food, calories }) => {
    // guardar los datos en la api
    // cerrar el modal
    try {
      setRefresh(false);
      const resFood = await useCreateFood(food, calories);
      console.log(resFood, 'user respons 2e');
      setOpenModal(false);
      setRefresh(true);
    } catch (e) {
      console.log(e);
      alert('ERROR AL REGISTRAR EL ALIMENTO');
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUserInfo(userInfo);
    }
  }, []);

  return (
    <>
      <GridWrapper className="bg-primary-grey-700">
        <Sidebar />
        <Header />
        <LayoutIntern className="relative">
          <div className="mb-4 flex justify-between lg:mb-10">
            <h1 className=" text-heading-01 font-semibold ">Alimentos</h1>

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
          {refresh && (
            <CardListFood
              openModal={openModal}
              onClose={() => setOpenModal(false)}
            >
              <ModalAddFood onSubmit={onSubmit} />
            </CardListFood>
          )}
        </LayoutIntern>
      </GridWrapper>
    </>
  );
};
