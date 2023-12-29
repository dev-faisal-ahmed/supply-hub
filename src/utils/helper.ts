import toast from 'react-hot-toast';

export function successToast(message: string) {
  toast.success(message, { duration: 1000 });
}

export function errorToast(message: string) {
  toast.error(message, { duration: 1000 });
}

export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function removeToken() {
  localStorage.removeItem('token');
}
