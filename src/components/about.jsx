export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
      
      <div className='whbg'>
        <div className='overlay'>
        <div className='container'>
        <h2  style={{ paddingTop: "30%" , color:"white"}}> About Us</h2>
        <p style={{  color:"white"}}>{props.data ? props.data.paragraph : "loading..."}</p>
        </div>
         </div>
      </div>

    
      <div className='flower'>
        <div className='overlay'>
        <div className='container'>

        <p style={{  color:"white"}}>{props.data ? props.data.paragraph1 : "loading..."}</p>
        <p style={{  color:"white"}}>{props.data ? props.data.paragraph2 : "loading..."}</p>
        
        <h3 style={{  color:"white"}}>Why Choose Us?</h3>
        <div className="list-style , about-text">
        <ul style={{  color:"white"}}>
                    {props.data
                      ? props.data.Why3.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
        </div>

        </div>
        </div>
      </div>

       
      </div>
    </div>
  );
};
