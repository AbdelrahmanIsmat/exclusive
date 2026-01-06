const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-60 h-9.5">
      <div className="absolute inset-0 bg-[#F5F5F5] rounded-md" />
      <input
        type="text"
        placeholder="What are you looking for?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          relative z-10
          w-full h-full
          pl-4 pr-10
          bg-transparent
          text-sm
          outline-none
          placeholder-black/50
        "
      />

      <button
        aria-label="Search"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L16.65 16.65M18 11A7 7 0 1 1 4 11a7 7 0 0 1 14 0Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
