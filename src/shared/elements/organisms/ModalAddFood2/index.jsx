import { Button, Input, Label } from '@elements/atoms';
import { useForm } from 'react-hook-form';

export const ModalAddFood2 = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const watchFoodType = watch('foodType');

  const foodList = [
    { id: 1, name: 'Desayuno' },
    { id: 2, name: 'Almuerzo' },
    { id: 3, name: 'Cena' },
  ];

  const onSubmit = async () => {
    console.log('execute');
    const formData = new FormData();
    formData.append('foodType');

    // const formData = new FormData();
    // formData.append('food', getValues('food'));
    // formData.append('password', getValues('password'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Input
            placeholder="Ingresa su comida"
            name="food"
            htmlFor="food"
            label="Comida:"
            type="text"
            className={`rounded-[10px] ${
              errors.food ? 'form-control_error' : ''
            }`}
            {...register('food', { required: true })}
          />
          {errors.food && errors.food.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
        </div>

        {/* } <div className="form-group !z-30">
          <Controller
            name="foodType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Dropdown
                {...field}
                options={foodList}
                label="Tipo de comida:"
                placeholder="Ingresar departamento..."
                // className={errors.department ? 'form-control_error' : ''}
              />
            )}
          />
        </div> */}

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
              {...register('foodType', {
                required: true,
              })}
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
              {...register('foodType', {
                required: true,
              })}
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
              {...register('foodType', {
                required: true,
              })}
            />
          </div>
        </div>

        <Button
          disabled={!formState.isValid}
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