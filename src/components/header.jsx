export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              {" "}
                <img style={{ display: "inline"}} src="img/IMG_2228.png" className="img-responsive" alt="" />{" "}

                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
//<h1>
//{props.data ? props.data.title : 'Loading'}
//<span></span>
//</h1> 
