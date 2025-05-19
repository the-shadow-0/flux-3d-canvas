import { StatsPanel } from './stats-panel';
// ThemeSwitcher is now in Header
// AiProgressBar will be conditionally rendered by ModelLoader or SceneCanvas

interface UiOverlayProps {
  // Props to control visibility or content of children can be added here
  // For example, model loading state for the progress bar
}

export function UiOverlay({}: UiOverlayProps) {
  // This component might be less prominent now, as elements are distributed
  // or it could be a specific panel for certain controls.
  // For now, let's keep it simple or just use StatsPanel directly where needed.
  return (
    <div className="fixed top-20 right-4 z-40 space-y-4 w-full max-w-xs sm:max-w-sm">
      <StatsPanel />
      {/* AiProgressBar will be shown by ModelLoader */}
      {/* ThemeSwitcher is in Header */}
    </div>
  );
}
