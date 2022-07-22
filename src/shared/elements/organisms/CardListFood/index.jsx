import { useEffect, useState } from 'react';

import { CardFood, Modal } from '@elements/molecules';
import { ModalAddFood } from '@elements/organisms';

import { useFoodService } from '../../../../services';

export const CardListFood = ({ openModal, onClose }) => {
  const [listFoods, setListFoods] = useState([]);

  const { useGetFoods } = useFoodService();

  const getListFoods = async () => {
    try {
      const foods = await useGetFoods();
      setListFoods(foods);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleAdd = () => {};

  useEffect(() => {
    getListFoods();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <div className="hidden grid-cols-[1fr_6rem_6rem_7.5rem] gap-[3vw] rounded-[5px] bg-primary-grey-500 py-3 px-4 text-center shadow-01 md:grid xl:gap-[2rem]">
            <p className=" text-left  text-paragraph-01 font-medium text-primary-grey-900">
              Nombre de comida
            </p>
            <p className="text-paragraph-01 font-medium text-primary-grey-900">
              Calorias
            </p>
            <p className="text-paragraph-01 font-medium text-primary-grey-900">
              Activo
            </p>
            <p className="text-paragraph-01 font-medium text-primary-grey-900">
              Fecha
            </p>
          </div>

          {listFoods &&
            listFoods.length > 0 &&
            listFoods.map((_) => <CardFood key={_.idAlimento} food={_} />)}
        </div>
      </div>
      <Modal
        title="Ingrese su comida"
        isOpen={openModal}
        onClose={onClose}
        className="!top-[10%] h-[90%] w-full translate-y-[0] md:!top-1/2 md:!h-auto md:w-[25rem] md:-translate-y-1/2"
      >
        <ModalAddFood />
      </Modal>
    </>
  );
};
