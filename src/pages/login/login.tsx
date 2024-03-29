/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { Input } from '../../components/form/input';
import { serverReq } from '../../utils/server-req';
import { serverAddress } from '../../data/server-address';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  errorToast,
  getToken,
  setToken,
  successToast,
} from '../../utils/helper';

export function Login() {
  const path = useNavigate();
  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // -------- getting data from form -------- \\
    const form = event.target as HTMLFormElement & {
      username: { value: string };
      password: { value: string };
    };

    const loginData = {
      username: form.username.value.trim(),
      password: form.password.value,
    };
    // -------- api calling -------- \\
    const url = `${serverAddress}/auth/login`;
    try {
      let response: any = await fetch(url, serverReq('POST', loginData));
      response = await response.json();

      if (response.email) {
        // -------- saving user token to local storage after successful login -------- \\
        setToken(response.token);
        successToast(`Successfully logged in`);
        path('/');
      } else {
        errorToast(`Failed to login`);
        form.reset();
      }
    } catch (err) {
      errorToast('something went wrong');
    }
  }

  if (getToken()) {
    errorToast('You are already logged in');
    return <Navigate to={'/'} />;
  }

  return (
    <section className='flex h-screen'>
      <div className='hidden h-full w-[70%] bg-red-50 md:block'>
        <img
          className='h-full w-full object-cover'
          src='./images/login.jpg'
        />
      </div>
      <div className='flex h-full flex-grow items-center justify-center bg-white p-8'>
        <div className='w-[95%] sm:min-w-[350px]'>
          <h3 className='text-xl font-semibold'>Welcome to</h3>
          <h1 className='text-3xl font-bold'>Supply Hub</h1>
          {/* ---------- from starts here ---------- */}
          <form onSubmit={handleLogin} className='mt-8 flex flex-col gap-5'>
            <Input
              label='Username'
              type='text'
              name='username'
              placeholder='Enter Your UserName'
              required
            />
            <Input
              label='Password'
              type='password'
              name='password'
              placeholder='Enter Your Password'
              required
            />

            <button className={twMerge('btn-primary', 'mt-3 w-full')}>
              Login
            </button>
          </form>
          {/* ---------- from ends here ---------- */}
        </div>
      </div>
    </section>
  );
}
