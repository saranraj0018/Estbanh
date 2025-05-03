import React from 'react';

const icons = {
  success: (
    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg className="h-5 w-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
};

const Toast = React.memo(({ type = 'success', message = '', visible = true }) => {
  if (!visible) return null;

  const base = type === 'success'
    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
    : 'bg-rose-50 border border-rose-200 text-rose-800';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-xl w-[420px] shadow-lg backdrop-blur-sm ${base}`}
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        {icons[type]}
        <p className="text-sm font-medium tracking-tight">{message}</p>
      </div>
    </div>
  );
});

export default Toast;
