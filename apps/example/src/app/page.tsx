import { Button } from '@monorepo-template/components';

export default function Home() {
  return (
    <main className="flex min-h-screen gap-x-2 bg-gray-200 p-4">
      <Button variant="default">Default</Button>
      <Button variant="link">Link</Button>
      <Button variant="ghost" className="text-black">
        Ghost
      </Button>
      <Button variant="outline" className="text-black">
        Outline
      </Button>
      <Button variant="secondary">Secondary</Button>
    </main>
  );
}
