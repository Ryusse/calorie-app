import { useState } from 'react';

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

export const Food = () => {
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = ({ food, calories }) => {
    // guardar los datos en la api
    // cerrar el modal
    setOpenModal(false);
  };

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
          <CardListFood
            openModal={openModal}
            onClose={() => setOpenModal(false)}
          >
            <ModalAddFood onSubmit={onSubmit} />
          </CardListFood>
        </LayoutIntern>
      </GridWrapper>
    </>
  );
};
