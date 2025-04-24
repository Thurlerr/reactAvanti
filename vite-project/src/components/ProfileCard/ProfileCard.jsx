export default function ProfileCard({ user }) {
    return (
      <div className="card text-center p-4 mx-auto" style={{ maxWidth: '320px' }}>
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-circle mb-3"
          width={120}
          height={120}
        />
        <h3>{user.name || user.login}</h3>
        <p className="text-muted">{user.bio}</p>
      </div>
    );
  }
  