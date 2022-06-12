import { Button, Input } from '@elements/atoms';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const AuthLogin = () => {
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async () => {
    console.log('execute');
    const formData = new FormData();
    formData.append('userName', getValues('userName'));
    formData.append('password', getValues('password'));
  };
  return (
    <div
      className="flex landscape:block flex-col gap-6 w-full h-full overflow-y-auto landscape:h-auto md:h-auto md:w-[30rem] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:rounded-[1rem] p-6 md:p-9
                 bg-others-transparency-white-900"
    >
      <h1 className="text-heading-01 font-semibold text-center mb-4">
        Ingresar
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Input
            placeholder="Ingresa tu usuario"
            name="userName"
            htmlFor="userName"
            label="Usuario"
            type="text"
            className={`rounded-[10px] ${
              errors.userName ? 'form-control_error' : ''
            }`}
            {...register('userName', { required: true, minLength: 8 })}
          />
          {errors.userName && errors.userName.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
          {errors.userName && errors.userName.type === 'minLength' && (
            <p className="form-error">Minimo ocho caracteres.</p>
          )}
        </div>

        <div className="form-group">
          <Input
            placeholder="Ingresa tu contraseña"
            name="password"
            htmlFor="password"
            label="Contraseña"
            type="password"
            className={`rounded-[10px] ${
              errors.password ? 'form-control_error' : ''
            }`}
            {...register('password', { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className="form-error">Minimo ocho caracteres.</p>
          )}
        </div>

        <Button
          disabled={!formState.isValid}
          classButton="primary"
          className="mt-4"
          type=""
        >
          Ingresar
        </Button>
      </form>

      <div className="w-full mt-auto landscape:mt-10 md:mt-4 text-center">
        <p className="text-paragraph-03 font-semibold">
          ¿Aún no tienes una cuenta?,
          <Link className="text-primary-red-300" to="/register">
            Regístrate.
          </Link>
        </p>
      </div>
    </div>
  );
};
