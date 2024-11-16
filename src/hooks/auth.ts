import axios from 'axios';

type LoginParams = {
  email: string;
  password: string;
};

export async function handleLogin({ email, password }: LoginParams) {
  await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      withXSRFToken: true,
    }
  );

  return response.status;
}

export async function handleLogout(): Promise<number> {
  await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`,
    {},
    {
      withCredentials: true,
      withXSRFToken: true,
    }
  );

  return response.status;
}
