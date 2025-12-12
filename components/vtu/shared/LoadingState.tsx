import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  title?: string;
  message?: string;
  isLoading: boolean;
}

export function LoadingState({
  title = "Processing",
  message = "Please wait...",
  isLoading,
}: LoadingStateProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  );
}
