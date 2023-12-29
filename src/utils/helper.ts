import toast from 'react-hot-toast';

export function successToast(message: string) {
  toast.success(message, { duration: 1000 });
}

export function errorToast(message: string) {
  toast.error(message, { duration: 1000 });
}
