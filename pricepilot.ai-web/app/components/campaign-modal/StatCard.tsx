interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  description: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
  valueColor: string;
  descColor: string;
}

export default function StatCard({
  icon,
  label,
  value,
  description,
  bgColor,
  borderColor,
  iconColor,
  valueColor,
  descColor,
}: StatCardProps) {
  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-4`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={iconColor}>{icon}</div>
        <span className={`text-sm font-semibold ${iconColor}`}>{label}</span>
      </div>
      <div className={`text-3xl font-bold ${valueColor} mb-1`}>{value}</div>
      <p className={`text-sm ${descColor}`}>{description}</p>
    </div>
  );
}
