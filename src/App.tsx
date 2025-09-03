import './App.css';
import LinkCleaner from './components/LinkCleaner/LinkCleaner';

export function App() {
  return (
    <>
      <h1>TidyLink</h1>
      <p>Paste your link and a cleaned copy will be provided.</p>
      <p>This does exactly one thing right now: remove all query parameters.</p>
      <LinkCleaner />
    </>
  );
}
