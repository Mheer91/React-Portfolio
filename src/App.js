import './App.css';
import './Assets/css/bootstrap.css';
import './Assets/css/custom.css';
import PageContainer from './components/PageContainer/pageContainer';
import Footer from './components/Footer/footer';
// import bg1 from './Assets/Images/13322.jpg';
// import bg2 from './Assets/Images/13323.jpg';
// import bg3 from './Assets/Images/13324.jpg';
// import bg4 from './Assets/Images/13327.jpg';
// import bg5 from './Assets/Images/13328.jpg';

function App() {
  return (
    <div className="App bgImg" style={{ minHeight: '100rem'}}>
        <PageContainer />
        <Footer />
    </div>
  );
}

export default App;
