import Layout from '../Layout';
import './errorPage.css';

function ErrorPage() {
  return (
    <>
      <Layout></Layout>
      <h1 className="error-message">Error, page not found</h1>
    </>
  );
}

export default ErrorPage;
