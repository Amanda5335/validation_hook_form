import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import {  z } from 'zod'
import './App.css'
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  phone: z.string().min(9),
  password: z.string().min(6)
})

function App() {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm ({
    resolver: zodResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
    reset()
  }

  const onError = (errors) => {
    console.log("Erros encontrados:", errors);
  };

  return (
    <>
      <div className='flex flex-col  items-center justify-center min-h-screen bg-gray-400 p-20'>
        <form onSubmit={handleSubmit(onSubmit, onError)} className='flex flex-col items-center justify-center content-center min-h-screen '>
          <h1 className='text-center font-bold '>Form validation</h1>
          <div className='flex flex-col'>
            <label className='center'>Nome:</label>
            <input {...register("name", { required: true })} type="text" placeholder='Digite seu nome' className="border p-2 rounded" />
            <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p className="text-red-500 text-sm">{message}</p>
            )}
          />
          </div>
          <div className='flex flex-col'>
            <label>Email:</label>
            <input {...register("email")} type="email" placeholder='Digite seu email' className="border p-2 rounded" />
            <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="text-red-500 text-sm">{message}</p>
            )}
          />
          </div>
          <div className='flex flex-col'>
            <label>Número telefone:</label>
            <input {...register("phone")} type="text" placeholder='número de telefone' className="border p-2 rounded" />
            <ErrorMessage
            errors={errors}
            name="phone"
            render={({ message }) => (
              <p className="text-red-500 text-sm">{message}</p>
            )}
          />
          </div>
          <div className='flex flex-col'>
            <label>Senha:</label>
            <input {...register("password")} type="password" placeholder='Insira sua senha' className="border p-2 rounded" />
            <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p className="text-red-500 text-sm">{message}</p>
            )}
          />
          </div>
          <button className='className="border p-2 rounded"' type='submit'>Enviar</button>
        </form>
      </div>
      
    </>
  )
}

export default App
