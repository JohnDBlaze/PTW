import react from 'react';
import './Data.css';
import {useEffect} from 'react';
import Aos from 'aos';
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup';

function Data() {
    {/*AOS animation*/ }
    useEffect(()=>{
        Aos.init({duration:2000});
    });
    return(
        <div>
 

             {/*large img*/ }


             <div>
                <video autoPlay loop muted>
                    <source src="https://d323sccto6ke4l.cloudfront.net/videos/web/datacollection.mp4" type="video/mp4"/>
                </video>
             </div>
<br></br>
<br></br>

                     {/* data section*/ }
            <div className='datavideo-clip-section'>
                <img  className='dataheader-image' src="https://d323sccto6ke4l.cloudfront.net/images/speechtech/st/en-us/speechtechheadericon_b.png" />
                <img  className='dataheader-image2' src="https://d323sccto6ke4l.cloudfront.net/images/speechtech/st/en-us/speechtechheadericon_b.png" />
                <div className=' datavideo-headerclip'>     
                <h1 data-aos="fade-right" id='dataheader-clip-text' >DATA COLLECTION</h1>    
                <p data-aos="fade-right"  id='dataclip-text2'>Speech datasets creation, evaluation, annotation and linguistic services</p>
            </div>  
        </div>

             {/*card*/ }





             <div className='datas CenterSection p-5'> 
             <Grid container spacing={{ xs: 2, md: 4, lg:4 }}>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                   
                        <div class="uk-card "data-aos="slide-up">
                            <div class="uk-card-media-top">
                                <img  className='dataCard' src="https://d323sccto6ke4l.cloudfront.net/images/speechtech/st/en-us/linguisticservices.png" alt=""/>
                            </div>
                            <div >
                                <div >
                                    <h3 className='dataHead' >Linguistic Services</h3>
                                </div>
                               
                                <p className='dataContent'>Dialect evaluation, phonology definition, lexicon and phoneme inventory creation, phonemic transcription, script proofing, audio QC... we do it all, thanks to our teams of native linguists.</p>
                            </div>
                        </div>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                   
                        <div class="uk-card "data-aos="slide-up">
                            <div class="uk-card-media-top">
                                <img className='dataCard' src="https://d323sccto6ke4l.cloudfront.net/images/speechtech/st/en-us/audiodatacollection.png" alt=""/>
                            </div>
                            <div >
                                <div >
                                    <h3 className='dataHead'>Audio Data Collection</h3>
                                </div>
                                <p className='dataContent'>Whether casting, directing, and recording for virtual assistants, or gathering crowd-sourced speech from non-pro speakers, we deliver high-quality data that matches your requirements.</p>
                            </div>
                        </div>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    
                        <div class="uk-card "data-aos="slide-up">
                            <div class="uk-card-media-top">
                                <img  className='dataCard' src="https://d323sccto6ke4l.cloudfront.net/images/speechtech/st/en-us/annotation.png" alt=""/>
                            </div>
                            <div >
                                <div >
                                <h3 className='dataHead' >Annotation</h3>
                                </div>
                                <p className='dataContent'>Our teams of native speakers and linguists evaluate, annotate, label, and classify audio datasets to train your AI models to the highest standard, and help create cutting-edge voice applications.</p>
                            </div>
                        </div>
                    
                </Grid>
            </Grid>
            <Grid lg={12} item container spacing={1}>
            <Grid item lg={12} xs={12}>
                <div data-aos="slide-up">
                    <p className='longtext1'>With 10 years' experience supporting the world's 
                        biggest tech companies, PTW offers a full range 
                        of dataset creation services for virtual assistants,
                         TTS and ASR. We handle everything from linguistics, 
                         collection, annotation, and evaluation, in any language.
                    </p>
                </div>
                <div data-aos="slide-up">
                    <p className='longtext1'>
                    With over 17 offices worldwide and a large network of experts,
                     we are the ideal partner for the tech industry.

                    </p>
                    
                </div>
                <div data-aos="slide-up">
                    <p className='longtext1'>
                    For large-scale, crowd-sourced voice data collections
                     across any demographic and locale, we have developed 
                     a fully-managed and scalable remote production model 
                     built around our proprietary platform. Speakers record 
                     themselves on their personal devices and submit the audio
                      to the cloud, while our internal teams manage the whole 
                      process to ensure we reach the right speakers and gather quality audio data in a fast, efficient, reliable, and secure manner.
                    </p>
                    
                </div>
            </Grid>
    </Grid>
</div>



                 {/*counter*/ }



<div className='datacounterSection'>

<Grid container spacing={{ xs: 2, md: 2, lg:1 }} >
        
        <Grid item lg={3} md={3} xs={6}>
            <CountUp className='counternum' end={40} duration={5} suffix=" +">   </CountUp>
            <h3 className='counterp'>Languages and Locales</h3>
        </Grid>
        <Grid item lg={4} md={3} xs={6}>
            <CountUp className='counternum' end={250} duration={5} suffix=" +">   </CountUp>
            <h3 className='counterp'>Unique TTS Voices Cast and Recorded</h3>
        </Grid>
        
       
        <Grid item lg={2} md={3} xs={6}>
            <CountUp className='counternum' end={30} duration={5} suffix=" M+">   </CountUp>
            <h3 className='counterp'>Words Recorded</h3>
        </Grid>
        <Grid item lg={3} md={3} xs={6}>
            <CountUp className='counternum' end={10} duration={6} suffix=" Yrs">   </CountUp>
            <h3 className='counterp'>Experience</h3>
        </Grid>
        
</Grid>
</div>


                        {/* helping links*/ }

                             
  
                        <div className="uk-section container datahelpful-list">
                <h5 className="datahelp-link">HELPFUL LINKS</h5>
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="left: true">

                    <ul class="uk-slider-items uk-grid datahelpful-wrapper uk-slider-items" uk-scrollspy="cls: uk-animation-scale-up; target: .helpful-section;" uk-grid>
                        <li class="datahelpful-section" uk-scrollspy="cls: uk-animation-zoom-in; repeat: true">

                            <div className='datahelpful-slide'> </div>
                            <div className="datahelpful-imgframe  ">
                                <img src="https://d323sccto6ke4l.cloudfront.net/images/lab/420/en-us/29.jpg" alt='' class="datahelpful-img " />
                            </div>
                            <div className="datahelpful-text">
                            <span><p>4 Outsourcing <br /> 
                                Lessons From A Games Audio Pro </p></span>


                            </div>
                        </li>
                        <li class="datahelpful-section" uk-scrollspy="cls: uk-animation-zoom-in; repeat: true">

                            <div className='datahelpful-slide'> </div>
                            <div className="datahelpful-imgframe  ">
                                <img src="https://d323sccto6ke4l.cloudfront.net/images/lab/420/en-us/9.jpg" alt='' class="datahelpful-img " />
                            </div>
                            <div className="datahelpful-text">
                            <span><p>Creating <br /> 
                                authentic cries of war</p></span>


                            </div>
                        </li>
                        <li class="datahelpful-section"uk-scrollspy="cls: uk-animation-zoom-in; repeat: true"  >

                            <div className='datahelpful-slide'> </div>
                            <div className="datahelpful-imgframe  ">
                                <img src="https://d323sccto6ke4l.cloudfront.net/images/lab/420/en-us/35.jpg" alt='' class="datahelpful-img " />
                            </div>
                            <div className="datahelpful-text">
                                <span><p>How the Perception and Execution of Early 
                                    <br />  
                                    Access Games has Changed (2013 - 2020)
                                    </p></span>

                            </div>

                        </li>

                    </ul>



                </div>

            </div>
<br></br><br></br>
            <div >
                <div className="dataread-more" uk-scrollspy="cls: uk-animation-slide-left; repeat: true" >
                    <p>Read More</p>

                    <div className="datahelpbtn-arrows">
                        <i class="fal fa-angle-right"></i>
                        <i class="fal fa-angle-right"></i>
                        <i class="fal fa-angle-right"></i>
                    </div>
                </div>
            </div><br></br>
            

        
        </div> 



       

)
}
export default Data