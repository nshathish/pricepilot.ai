interface ModalFooterProps {
  onClose: () => void;
  onExecute: () => void;
}

export default function ModalFooter({ onClose, onExecute }: ModalFooterProps) {
  return (
    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
      <div className="text-sm text-gray-600">
        <p>Ready to execute this campaign?</p>
        <p className="text-xs text-gray-500">
          This will apply the recommended discounts and launch marketing
          channels
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
        >
          Review Later
        </button>
        <button
          onClick={onExecute}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg"
        >
          Execute Campaign
        </button>
      </div>
    </div>
  );
}
