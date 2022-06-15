import { Button, Input } from '@elements/atoms';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const AuthRegister = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async () => {};

  return (
    <div
      className="absolute top-1/2 left-1/2 flex h-full w-full -translate-y-1/2 -translate-x-1/2 flex-col gap-6 overflow-y-auto bg-others-transparency-white-900 p-6 md:h-auto md:w-[30rem] md:rounded-[1rem] md:p-9 landscape:block
    landscape:h-auto"
    >
      <h1 className="mb-4 text-center text-heading-01 font-semibold">
        Registrarse
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Input
            placeholder="Ingresa tu nombre"
            name="name"
            htmlFor="name"
            label="Nombre"
            type="text"
            className={`rounded-[10px] ${
              errors.name ? 'form-control_error' : ''
            }`}
            {...register('name', { required: true, minLength: 8 })}
          />
          {errors.name && errors.name.type === 'required' && (
            <p className="form-error">Campo obligatorio.</p>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <p className="form-error">Minimo ocho caracteres.</p>
          )}
        </div>

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
          Registrarse
        </Button>
      </form>

      <div className="mt-auto w-full text-center md:mt-4 landscape:mt-10">
        <p className="text-paragraph-03 font-semibold">
          ¿Ya tienes una cuenta?,
          <Link className="text-primary-red-300" to="/login">
            Ingresa.
          </Link>
        </p>
      </div>
    </div>
  );
};
