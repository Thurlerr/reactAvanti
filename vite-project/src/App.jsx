import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import { fetchGitHubUser } from './services/github';
import './App.css';

export default function App() {
  const [user, setUser]       = useState(null);
  const [error, setError]     = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleSearch(username) {
    setError('');
    setUser(null);
    setLoading(true);
    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
    } catch {
      setError('Nenhum perfil foi encontrado com esse nome de usuário.\nTente novamente');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center min-vh-100 text-white">
      <h1 className="mb-4">Perfil GitHub</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {user && <ProfileCard user={user} />}
    </div>
  );
}
