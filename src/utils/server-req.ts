/* eslint-disable @typescript-eslint/no-explicit-any */
export function serverReq(method: 'POST' | 'PUT' | 'PATCH', body: any) {
  return {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}
