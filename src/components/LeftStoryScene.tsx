import CustomerScene from './CustomerScene';
import DriverScene from './DriverScene';
import CompletionScene from './CompletionScene';

interface LeftStorySceneProps {
  stage: number;
}

export default function LeftStoryScene({ stage }: LeftStorySceneProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {stage === 0 && <CustomerScene />}
      {stage === 1 && <DriverScene />}
      {stage === 2 && <CompletionScene />}
    </div>
  );
}
