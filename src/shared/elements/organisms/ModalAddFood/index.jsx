import { Button, Input, Label } from '@elements/atoms';
import { useForm } from 'react-hook-form';

export const ModalAddFood = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState,
    watch,
    getValues,
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
    // const formData = new FormData();
    // formData.append('food', getValues('food'));
    // formData.append('password', getValues('password'));
  };

  console.log(watch('foodType'));

  return (
    <div>
      <h1 className="mb-8 text-center text-heading-04 font-bold">
        Ingrese su comida
      </h1>
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
            className={`mt-4 cursor-pointer rounded-[0.5rem] border py-2 px-4 ${
              watchFoodType === 'Desayuno'
                ? 'border-primary-red-100 bg-others-transparency-red-100'
                : 'border-primary-grey-800'
            }`}
            onClick={() =>
              setValue('foodType', 'Desayuno', { shouldValidate: false })
            }
          >
            <Input
              name="foodType"
              htmlFor="foodType"
              label="Desayuno"
              type="radio"
              valueInput="Desayuno"
              classNameContainer="flex items-center gap-4 flex-row-reverse justify-end h-8"
              className={`radio !w-4 w-4 cursor-pointer accent-primary-red-100 !shadow-none`}
              classNameLabelContainer="!mb-0 "
              classNameLabel="cursor-pointer"
              {...register('foodType', {
                required: true,
              })}
            />
          </div>

          <div
            className={`mt-4 cursor-pointer rounded-[0.5rem] border py-2 px-4 ${
              watchFoodType === 'Almuerzo'
                ? 'border-primary-red-100 bg-others-transparency-red-100'
                : 'border-primary-grey-800'
            }`}
            onClick={() =>
              setValue('foodType', 'Almuerzo', { shouldValidate: false })
            }
          >
            <Input
              name="foodType"
              htmlFor="foodType"
              label="Almuerzo"
              type="radio"
              valueInput="Almuerzo"
              classNameContainer="flex items-center gap-4 flex-row-reverse justify-end h-8"
              className="radio !w-4 w-4 cursor-pointer accent-primary-red-100 !shadow-none"
              classNameLabelContainer="!mb-0 "
              classNameLabel="cursor-pointer"
              {...register('foodType', {
                required: true,
              })}
            />
          </div>

          <div
            className={`mt-4 cursor-pointer rounded-[0.5rem] border py-2 px-4 ${
              watchFoodType === 'Cena'
                ? 'border-primary-red-100 bg-others-transparency-red-100'
                : 'border-primary-grey-800'
            }`}
            onClick={() =>
              setValue('foodType', 'Cena', { shouldValidate: false })
            }
          >
            <Input
              name="foodType"
              htmlFor="foodType"
              label="Cena"
              type="radio"
              valueInput="Cena"
              classNameContainer="flex items-center gap-4 flex-row-reverse justify-end h-8"
              className="radio !w-4 w-4 cursor-pointer accent-primary-red-100 !shadow-none"
              classNameLabelContainer="!mb-0 "
              classNameLabel="cursor-pointer"
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
