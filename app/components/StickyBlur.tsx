"use client";

export default function StickyBlur() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 pointer-events-none z-50"
      style={{
        height: '150px',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(50px)',
          WebkitBackdropFilter: 'blur(20px)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
        }}
      />
    </div>
  );
}
