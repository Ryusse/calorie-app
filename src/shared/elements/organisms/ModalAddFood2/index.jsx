import { Fragment, useEffect, useState } from 'react';

import { Button, Input, Label } from '@elements/atoms';
import Icon from '@elements/atoms/Icon';
import { Combobox, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';

import { useFoodService } from '../../../../services';
// import { forwardRef, Fragment, useState } from 'react';

export const ModalAddFood2 = ({ onSubmit }) => {
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [options, setOptions] = useState([{ id: 0, name: '' }]);

  const { useGetFoods } = useFoodService();

  const getListFoods = async () => {
    try {
      const foods = await useGetFoods();
      const listTemp = [];
      for (let i = 0; i < foods.length; i++) {
        listTemp.push({ id: foods[i].idAlimento, name: foods[i].nombres });
      }
      console.log(listTemp);
      setOptions(listTemp);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitEvent = () => {
    onSubmit(getValues('foodType'), selected);
  };

  const watchFoodType = watch('foodType');

  const foodList = [
    { id: 1, name: 'Desayuno' },
    { id: 2, name: 'Almuerzo' },
    { id: 3, name: 'Cena' },
  ];

  // const onSubmit = async () => {
  //   console.log('execute');
  //   // const formData = new FormData();
  //   // formData.append('foodId');
  //   // formData.append('foodType');
  //   console.log(getValues('foodType'))
  //   console.log(selected,'seleccionado')
  //   // const formData = new FormData();
  //   // formData.append('food', getValues('food'));
  //   // formData.append('password', getValues('password'));
  // };

  useEffect(() => {
    getListFoods();
  }, []);

  const [selected, setSelected] = useState(options[0]);
  const [query, setQuery] = useState('');

  const setSelectedTemp = (param) => {
    setSelected(param);
    console.log(selected, 'cambiando selectd');
  };

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitEvent)}>
        <div className="form-group !z-30">
          {/* <Controller
            name="foodId"
            control={control}
            render={({ field }) => (
              <Dropdown
                name="foodId2"
                {...field}
                options={listFoods}
                label="Tipo de comida:"
                placeholder="Seleccione su comida..."
                // className={errors.department ? 'form-control_error' : ''}
              />
            )}
          /> */}
          <div className={`!z-70 relative w-full `}>
            <Label
              // htmlFor={htmlFor}
              label="Tipo de comida:"
              // required={showRequiredLabel}
              // className={classNameLabelContainer}
              // classNameText={classNameLabel}
            />
            <Combobox value={selected} onChange={setSelectedTemp}>
              <div className="relative mt-1">
                <div className="relative">
                  <Combobox.Input
                    className={`input-lg 0.5rem w-full border border-primary-grey-100 text-paragraph-02 outline-none placeholder:text-paragraph-03 placeholder:text-placeholder focus:shadow-01 
                          `}
                    displayValue={(option) => option.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <Icon name="icArrow" className="rotate-90" />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery('')}
                >
                  <Combobox.Options className="max-h-30 absolute z-20 mt-2 w-full overflow-y-auto rounded-md bg-primary-grey-900 shadow-01 ring-opacity-5 focus:outline-none">
                    {filteredOptions.length === 0 && query !== '' ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredOptions.map((option) => (
                        <Combobox.Option
                          key={option.id}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-3 pl-10 pr-4 text-paragraph-01 ${
                              active
                                ? 'bg-primary-grey-800 text-white'
                                : 'text-gray-900'
                            }`
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {option.name}
                              </span>
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>

        <div className="form-group">
          <Label label="Seleccione el tipo de comida:" />

          <div
            className={`mt-4 cursor-pointer rounded-[0.5rem] border py-3 px-5 duration-200 ${
              watchFoodType === 'Desayuno'
                ? 'border-primary-red-100 bg-others-transparency-red-100'
                : 'border-primary-grey-550'
            }`}
            onClick={() =>
              setValue('foodType', 'Desayuno', { shouldValidate: true })
            }
          >
            <Input
              name="foodType"
              htmlFor="Desayuno"
              label="Desayuno"
              type="radio"
              valueInput="Desayuno"
              classNameContainer="flex items-center gap-4 flex-row-reverse justify-end"
              className={`radio !h-4 !w-4 cursor-pointer accent-primary-red-100 !shadow-none`}
              classNameLabelContainer="!mb-0 "
              classNameLabel={`cursor-pointer text-placeholder font-normal ${
                watchFoodType === 'Desayuno' ? 'text-primary-lightBlue-100' : ''
              }`}
              {...register('foodType')}
            />
          </div>

          <div
            className={`mt-4 cursor-pointer rounded-[0.5rem] border py-3 px-5 duration-200 ${
              watchFoodType === 'Almuerzo'
                ? 'border-primary-red-100 bg-others-transparency-red-100'
                : 'border-primary-grey-550'
            }`}
            onClick={() =>
              setValue('foodType', 'Almuerzo', { shouldValidate: true })
            }
          >
            <Input
              name="foodType"
              htmlFor="Almuerzo"
              label="Almuerzo"
              type="radio"
              valueInput="Almuerzo"
              classNameContainer="flex items-center gap-4 flex-row-reverse justify-end"
              className="radio !h-4 !w-4 cursor-pointer accent-primary-red-100 !shadow-none"
              classNameLabelContainer="!mb-0 "
              classNameLabel={`cursor-pointer text-placeholder font-normal ${
                watchFoodType === 'Almuerzo' ? 'text-primary-lightBlue-100' : ''
              }`}
              {...register('foodType')}
            />
          </div>

          <div
            className={`mt-4 cursor-pointer rounded-[0.5rem] border py-3 px-5 duration-200 ${
              watchFoodType === 'Cena'
                ? 'border-primary-red-100 bg-others-transparency-red-100'
                : 'border-primary-grey-550'
            }`}
            onClick={() =>
              setValue('foodType', 'Cena', { shouldValidate: true })
            }
          >
            <Input
              name="foodType"
              htmlFor="Cena"
              label="Cena"
              type="radio"
              valueInput="Cena"
              classNameContainer="flex items-center gap-4 flex-row-reverse justify-end"
              className="radio !h-4 !w-4 cursor-pointer accent-primary-red-100 !shadow-none"
              classNameLabelContainer="!mb-0 "
              classNameLabel={`cursor-pointer text-placeholder font-normal ${
                watchFoodType === 'Cena' ? 'text-primary-lightBlue-100' : ''
              }`}
              {...register('foodType')}
            />
          </div>
        </div>

        <Button
          // disabled={!formState.isValid}
          classButton="primary"
          className="mt-4"
          type=""
        >
          Registrar
        </Button>
      </form>
    </div>
  );
};
