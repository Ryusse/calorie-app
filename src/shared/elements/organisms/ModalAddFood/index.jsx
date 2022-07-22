
import { Button, Input } from '@elements/atoms';
import { useForm } from 'react-hook-form';

export const ModalAddFood = ({ onSubmit }) => {
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
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

  // const onSubmit = async () => {
  //   console.log('execute');
  //   const formData = new FormData();
  //   formData.append('food', getValues('food'));
  //   formData.append('calories', getValues('calories'));
    


  //   // const formData = new FormData();

  // };



  const handleSubmitEvent = () => {
    onSubmit(getValues())
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitEvent)}>
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

        <div className="form-group">
          <Input
            placeholder="Ingresa las calorias"
            name="calories"
            htmlFor="calories"
            label="Calorias:"
            type="text"
            className={`rounded-[10px] ${
              errors.calories ? 'form-control_error' : ''
            }`}
            {...register('calories', { required: true })}
          />
          {errors.calories && errors.calories.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
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
