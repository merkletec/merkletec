export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        
        

        <div className='whbg'>
        <div className='overlay'>
        <div className='section-title'>
          <h2>Our Services</h2>
         
        </div>
        <div className='row'>

        <div  className='col-md-4'>
        {' '}
                  <img style={{ maxWidth: "25%"}} src={"img/team/1.png"} alt='...' className='services-img' />
                  <div className='service-desc'>
                    <h3>前端網頁設計</h3>
                    <p>視覺設計，舉凡動畫、轉場、廣告、互動UI、懸浮等RWD功能。</p>
                  </div>
        </div>
        <div  className='col-md-4'>
        {' '}
                  <img style={{ maxWidth: "25%"}} src={"img/team/2.png"} alt='...' className='services-img' />
                  <div className='service-desc'>
                    <h3>後端網頁設計</h3>
                    <p>資料庫建立及管理、使用者資料辨識、顧客關係管理分析。</p>
                  </div>
        </div>
        <div  className='col-md-4'>
        {' '}
                  <img style={{ maxWidth: "25%"}} src={"img/team/3.png"} alt='...' className='services-img' />
                  <div className='service-desc'>
                    <h3>行銷經營規劃</h3>
                    <p> KOL、KOC合作洽談、行銷顧問、社群經營輔助、流程設計與優化。</p>
                  </div>
        </div>


        </div>

        <div className='row'>

        <div  className='col-md-4'>
        {' '}
                  <img style={{ maxWidth: "25%"}} src={"img/team/4.png"} alt='...' className='services-img' />
                  <div className='service-desc'>
                    <h3>商業圖文攝影設計</h3>
                    <p>社群宣傳文案、插圖繪畫、商業攝影、人像攝影。</p>
                  </div>
        </div>
        <div  className='col-md-4'>
        {' '}
                  <img style={{ maxWidth: "25%"}} src={"img/team/5.png"} alt='...' className='services-img' />
                  <div className='service-desc'>
                    <h3>智能合約撰寫</h3>
                    <p>常見的大宗NFT規範皆為服務範圍，可客製需求;亦可撰寫貨幣合約。</p>
                  </div>
        </div>
        <div  className='col-md-4'>
        {' '}
                  <img style={{ maxWidth: "25%"}} src={"img/team/6.png"} alt='...' className='services-img' />
                  <div className='service-desc'>
                    <h3>3D繪圖列印</h3>
                    <p> 光固化列印、堆疊成型，可客製設計無複雜曲面之3D圖檔。</p>
                  </div>
        </div>


        </div>

        </div>
        </div>
      </div>
    </div>
  )
}
