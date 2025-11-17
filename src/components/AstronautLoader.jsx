const AstronautLoader = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="astronaut-loader">
        <svg viewBox="0 0 64 64" width="120" height="120" className="block">
          <g transform="translate(8 8)">
            <circle cx="24" cy="24" r="18" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5" />
            <circle cx="24" cy="20" r="6" fill="#081028" stroke="#93c5fd" strokeWidth="0.9" />
            <path d="M6 46c6-6 36-6 46 0" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.06"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AstronautLoader;
