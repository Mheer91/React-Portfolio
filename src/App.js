import './App.css';
import './Assets/css/bootstrap.css';
import PageContainer from './components/PageContainer/pageContainer';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App bg-dark" style={{ minHeight: '100rem'}}>
        <PageContainer />
        <Footer />
    </div>
  );
}

export default App;
