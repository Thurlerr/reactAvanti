//services/: lógica de chamada à API isolada

export async function fetchGitHubUser(username) {
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (!resp.ok) throw new Error('Usuário não encontrado');
    return resp.json(); // já traz name, avatar_url, bio… (testado)
  }
  