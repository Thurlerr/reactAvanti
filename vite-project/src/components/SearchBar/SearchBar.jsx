import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  }

  return (
    <form className={styles.form + ' d-flex'} onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Digite um usuário do GitHub"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        🔍 
      </button>
    </form>
  );
}
