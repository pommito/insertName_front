import { LogoutButton } from '@/src/components/logout-button';

export default async function Page() {
  // Check if user is authenticated

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-4 px-4">
      <h1>Soon to be a dashboard</h1>
      <LogoutButton />
    </div>
  );
}
