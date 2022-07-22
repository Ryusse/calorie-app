import { useEffect, useState } from 'react';

import { CardMeal, Modal } from '@elements/molecules';

import { useMealService } from '../../../../services';

export const CardListMeal = ({ openModal, onClose, children }) => {
  const [listMeals, setListMeals] = useState([]);
  const [userInfo, setUserInfor] = useState({ nombres: 'Marco', idUsuario: 1 });

  const { useGetMeals } = useMealService();

  const getListMeals = async () => {
    try {
      const foods = await useGetMeals(userInfo.idUsuario);
      console.log(foods,'comidas??')
      setListMeals(foods);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleAdd = () => {};

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUserInfor(userInfo);
      getListMeals();
    }
    
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <div className="hidden grid-cols-[1fr_6rem_6rem_7.5rem] gap-[3vw] rounded-[5px] bg-primary-grey-500 py-3 px-4 text-center shadow-01 md:grid xl:gap-[2rem]">
            <p className=" text-left  text-paragraph-01 font-medium text-primary-grey-900">
              Nombre de la comida
            </p>
            <p className="text-paragraph-01 font-medium text-primary-grey-900">
              Calorias
            </p>
            <p className="text-paragraph-01 font-medium text-primary-grey-900">
              Tipo
            </p>
            <p className="text-paragraph-01 font-medium text-primary-grey-900">
              FechaCalorias
            </p>
          </div>

          {listMeals &&
            listMeals.length > 0 &&
            listMeals.map((_) => <CardMeal key={_.idRegistro} meal={_} />)}
        </div>
      </div>
      <Modal
        title="Ingrese su comida"
        isOpen={openModal}
        onClose={onClose}
        className="!top-[10%] h-[90%] w-full translate-y-[0] md:!top-1/2 md:!h-auto md:w-[25rem] md:-translate-y-1/2"
      >
        {children}
      </Modal>
    </>
  );
};
