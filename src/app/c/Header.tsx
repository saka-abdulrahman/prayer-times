export default function Header({ isDark, language, setIsDark, setLanguage }) {
  return (
    <header className={` w-full flex items-between absolute top-0 `}>
      <h1>Prayer Times</h1>

      <div>
        <button></button>
        <button></button>
      </div>

      <div></div>
    </header>
  );
}
