function KPIcard({ title, value }) {
  return (
    <div className="min-h-28 w-full max-w-72 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h2 className="mt-2 break-words text-3xl font-semibold leading-tight text-slate-900">
        {value}
      </h2>
    </div>
  );
}

export default KPIcard;
