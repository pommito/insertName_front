import { Header } from '@/src/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <section className="container mx-auto flex w-full flex-col items-center justify-center gap-4 py-40 px-4">
        <h1 className="text-6xl font-semibold">Soon to be a landing page</h1>
        <p className="text-xl text-center w-1/2 text-pretty">
          Ad consectetur qui ullamco do proident cupidatat reprehenderit qui esse veniam dolor anim. Officia cillum in
          ullamco ullamco sunt culpa esse proident.
        </p>
      </section>
    </>
  );
}
