export const LanguageButtons = () => {
  return (
    <div className="header__lang">
      <button
        className="header__lang-button"
        type="button"
        aria-label="Switch to English"
      >
        ENG
      </button>
      <button
        className="header__lang-button"
        type="button"
        aria-label="Switch to Russian"
      >
        RUS
      </button>
    </div>
  );
};
