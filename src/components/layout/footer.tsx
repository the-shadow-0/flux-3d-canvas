import { ControlsToggle } from '@/components/scene/controls-toggle';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 p-4 glassmorphic">
      <div className="container mx-auto flex items-center justify-center sm:justify-end">
        <ControlsToggle />
      </div>
    </footer>
  );
}
