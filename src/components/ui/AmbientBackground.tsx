export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-tr from-[#d2e4ff]/35 via-[#e8f1fb]/40 to-[#bee9ff]/25 blur-[120px] rounded-full" />
      <div className="absolute top-[35%] -left-32 w-[550px] h-[550px] bg-secondary-fixed/20 blur-[130px] rounded-full" />
      <div className="absolute top-[60%] -right-24 w-[600px] h-[550px] bg-primary-fixed/25 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 left-1/3 w-[650px] h-[450px] bg-tertiary-fixed/20 blur-[130px] rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#dcd8cf_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
    </div>
  );
}
