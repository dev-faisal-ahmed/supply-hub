export function Loader() {
  return (
    <div
      className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent text-primary-600 dark:text-primary-600'
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
