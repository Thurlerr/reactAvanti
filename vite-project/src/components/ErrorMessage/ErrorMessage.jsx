export default function ErrorMessage({ message }) {
    return (
      <div className="alert alert-danger text-center mx-auto" style={{ maxWidth: '400px' }}>
        {message}
      </div>
    );
  }

  //verificar entr ou deixar padrão?