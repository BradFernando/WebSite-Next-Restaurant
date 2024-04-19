import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/app/restaurant/pages/products').then(r => r);
  }, [router]);

  return null;
}