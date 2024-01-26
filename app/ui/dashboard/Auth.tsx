'use client';

import React from 'react';
import { useSession, SessionProvider } from 'next-auth/react';

function Auth() {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const data = useSession();

  console.log(data);

  return null;
}

export default Auth;
