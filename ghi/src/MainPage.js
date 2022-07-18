import CitySearch from './CitySearch'
import background from './images/SF.png';

function MainPage() {
    return (
    <>
      <div className="wrapper" style={{ backgroundImage: `url(${background})`}}>
        <div className="px-5 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Nomad-Nerds</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-30 pb-5">
              Connecting you to your favorite activities and locations!
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="d-flex justify-content-center">
              City Search
            </div>
            <CitySearch/>
          </div>
          <div className='col'>
            <div className="d-flex justify-content-center">
              Category Search
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}
  
export default MainPage;