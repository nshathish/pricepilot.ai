import { X } from 'lucide-react';

interface ModalHeaderProps {
  onClose: () => void;
}

export default function ModalHeader({ onClose }: ModalHeaderProps) {
  return (
    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Detailed Analysis Report
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          AI-powered markdown optimization strategy
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}
