import { Button, Dropdown, Input } from '@elements/atoms';
import { Controller, useForm } from 'react-hook-form';

export const ModalAddFood = () => {
  const {
    register,
    control,
    handleSubmit,
    formState,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const foodList = [
    { id: 1, name: 'Desayuno' },
    { id: 2, name: 'Almuerzo' },
    { id: 3, name: 'Cena' },
  ];

  const onSubmit = async () => {
    console.log('execute');
    const formData = new FormData();
    formData.append('food', getValues('food'));
    formData.append('password', getValues('password'));
  };
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
            label="Comida"
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

        <div className="form-group !z-30">
          <Controller
            name="food type"
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
