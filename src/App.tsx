import './App.css';
import LinkCleaner from './components/LinkCleaner/LinkCleaner';

export function App() {
  return (
    <>
      <h1>Tiddlylink</h1>
      <p>Paste your link below to add it to the scratchpad.</p>
      <LinkCleaner />
    </>
  );
}
