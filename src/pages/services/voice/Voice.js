import * as React from 'react';
import {useEffect} from 'react';
import './Voice.css';
import Grid from '@mui/material/Grid';
import Aos from 'aos';


function Voice() {
     {/*AOS animation*/ }
     useEffect(()=>{
        Aos.init({duration:2000});
    });
    return(
        <Grid lg={12} item container spacing={1} >
        <Grid item lg={12} xs={12}> 
        <div className='body'>
            
             {/*large img*/ }
        

          
                <video autoPlay loop muted>
                    <source src="https://d323sccto6ke4l.cloudfront.net/videos/web/voiceproduction.mp4" type="video/mp4"/>
                </video>
            
       

 
                     {/* voice section*/ }
                     <div className='voicevideo-clip-section'>
                        <img  className='voiceheader-image' src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/audioproductionheardericon.png" />
                        <img  className='voiceheader-image2' src="https://d323sccto6ke4l.cloudfront.net/images/speechtech/st/en-us/speechtechheadericon_b.png" />
                <div className=' voicevideo-headerclip'>
                <div className='voiceheader-clip-text'>
                <h1 data-aos="fade-right" id='voiceheader-clip-text'>VOICE PRODUCTION</h1>
                </div>
               
                <p data-aos="fade-right" id='voiceclip-text2'>Inspire Your Players With Multi-Award Winning Audio and Voice Production</p>
               
            </div>  
        </div>





                            {/* card section*/ }

<div className='voicecard'> 

                <Grid lg={12} item container spacing={1} >
                    <Grid item lg={6} xs={12}>
                        <div className='logo'   data-aos="zoom-in">
                        <a  href="http://www.side.com/" ><img className='LogoImg1'  src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/sidelogo.png"/></a>
                       <br></br><br></br>  <a  href="https://entalize.co.jp/en/" ><img className='LogoImg2' src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/entalizelogo.png"/></a>       
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} s={12}>
                                <div  data-aos="slide-up" >
                                    
                                        
                                        <p className=' noimage voiceContent' >Audio production specialists SIDE boast
                                            25 years of character performance experience.
                                            Committed to storytelling excellence, SIDE
                                            provides industry-leading casting,
                                            expert voice directors, a seasoned production team, 
                                            innovative engineers, and dedicated post-production services.
                                        </p>
                                </div>
                              
                            
                    </Grid>
                    <Grid item lg={6} xs={12}>

                        <div class="uk-card maincard"data-aos="slide-up">
                            <div class="uk-card-media-top">
                                <img className='voiceCardimg' src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/postproductionmastering.png" alt=""/>
                            </div>
                            <div >
                                <div >
                                    <h3 className='voiceHead'>Voice Production</h3>
                                </div>
                                <p className='voiceContent'>Industry-recognized casting, veteran voice directors, a seasoned production team, and dedicated post-production services for your video game character performance needs. Our staff will work with you to find the best set-up for both your audio and performance requirements.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <div class="uk-card maincard "data-aos="slide-up">
                            <div class="uk-card-media-top">
                                <img className='voiceCardimg' src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/casting.png" alt=""/>
                            </div>
                            <div>
                                <div >
                                    <h3 className='voiceHead' >Original Language Production</h3>
                                </div>
                                <p className='voiceContent'>We record production-ready dialogue from both single voice and ensemble casts, including facial capture and filmed auditions. Our production management takes care of asset management, editorial, mastering, and QA, delivering hundreds of thousands of audio files every year.</p>
                            </div>
                        </div>
                    </Grid>
                    </Grid>
                    <div className='circleBg'>
                    <Grid lg={12} item container spacing={1} >
                    <Grid item lg={6} xs={12}>
                        <div class="uk-card maincard"data-aos="slide-up">
                            <div class="uk-card-media-top">
                                <img className='voiceCardimg' src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/audiolocalization.png" alt=""/>
                            </div>
                            <div >
                                <div >
                                    <h3 className='voiceHead' >Localized Audio</h3>
                                </div>
                                <p className='voiceContent'>We provide one point person for all languages to maintain consistency throughout the production, across all territories. We have production hubs in London, Tokyo, Shanghai, and Los Angeles, and an established network of recording studios across Europe, Asia, and Latin America, providing a reactive and scalable localization solution in over 30 languages.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <img className='voicebigimg' src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/audiocharacter.png" alt=""/>
                    </Grid>
                    </Grid>
                    </div>             
 </div>



         {/*develop star*/}

        <div className='star'>
         <Grid lg={12} item container spacing={1} >
            <Grid item lg={7} xs={12}>
                <img src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/developstar.png" />
                <Grid lg={12} item container spacing={1} >
                <Grid item lg={6} xs={12}>
                    <p className='starp'>2020 <br></br> Winner Best Creative Provider</p>
                </Grid>
                <Grid item lg={5} xs={12}>
                    <p className='starp'>2016, 2015, 2013 <br></br> Winner Creative Outsourcer - Audio</p>
                </Grid>
                </Grid>
                <Grid lg={12} item container spacing={1} >
                <Grid item lg={6} xs={12}>
                    <p className='starp'>2012, 2011, 2010 <br></br> Winner Audio Outsourcer</p>
                </Grid>
                <Grid item lg={5} xs={12}>
                    <p className='starp'>2009, 2006 <br></br> Winner Creative Services</p>
                </Grid>
                </Grid>
            </Grid>
            <div className='line1'>
                <Grid item lg={12} xs={12}>
                    <img className='tig' src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/tigalogo.png" /> 
                    <p className='starp tigl'>2015, 2014 <br></br> Winner Best Audio Supplier</p> 
                </Grid>
            </div>
        </Grid>
    </div>





                    {/* how do we work*/}

<div className='work'>
    <Grid lg={12} item container spacing={1} >
        <Grid item lg={12} xs={12} className='underline'>
            <h3 className='textwork'>HOW DO WE WORK ?</h3>
        </Grid>
    </Grid><br></br>
    <div className='tmieline'>
    <Grid lg={12} item container spacing={1} >
            <Grid item lg={12} xs={12} >
                <img class="firstD" src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/greendiamond.png"/>
            </Grid>
    </Grid>
    <div className='firsttime'>
    <Grid lg={12} item container spacing={1} id="aaa" >
            <Grid item lg={6} xs={12} className='cuttingedge1' id="a1">
                <div class="datasquaredBorder "data-aos="zoom-in">
                     <img src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/cuttingedge.png" />
                 </div>
            </Grid>
            <Grid item lg={6} xs={12}id="a2" >
                <div className='leftline'>
                    <div data-aos="slide-up" className=' noimage1'>
                    <h3 className='text-left voiceHead1' >Cutting-Edge, Global Studios</h3>
                    <p className='text-left voiceContentwork '>With state-of-the-art recording and production facilities in London,
                    Los Angeles, and Shanghai and an established network of certified
                    recording studios across Europe, Asia, and Latin America, 
                    we offer responsive, scalable voice production.</p>
                </div></div>
            </Grid>
     </Grid>
            <Grid lg={12} item container spacing={1} >
                <Grid item lg={12} xs={12} >
                    <img class="firstD" src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/greendiamond.png"/>
                </Grid>
            </Grid>
        <Grid lg={12} item container spacing={1} >
            <Grid item lg={6} xs={12} className='cuttingedge1'>
                <div className='noimage2'data-aos="slide-up" >
                    <h3 className='text-left  voiceHead1'>Dedicated Production Management</h3>
                    <p className='text-left voiceContentwork'>Each project is designated a Production Manager who ensures your
                        production's success with information collated for director,
                        actors and engineer, smart scheduling, scripts formatted 
                        for efficiency and tracking, and a well-managed budget.</p>
                </div>
            </Grid>
            <Grid item lg={6} xs={12}className='cuttingedge2' >
                    <div class="datasquaredBorder2 datasquaredBordertwo"data-aos="zoom-in">
                        <img  src="https://d323sccto6ke4l.cloudfront.net/images/audioproduction/ap/en-us/prodmanagement.png" />
                    </div>
            </Grid>
        </Grid>
        </div>
        </div>
    
</div>

                        {/* helping links*/ }


                             
  
                        <div className="uk-section container voicehelpful-list">
                <h5 className="voicehelp-link">HELPFUL LINKS</h5>
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="left: true">

                    <ul class="uk-slider-items uk-grid voicehelpful-wrapper uk-slider-items" uk-scrollspy="cls: uk-animation-scale-up; target: .helpful-section;" uk-grid>
                        <li class="voicehelpful-section" uk-scrollspy="cls: uk-animation-zoom-in; repeat: true">

                            <div className='voicehelpful-slide'> </div>
                            <div className="voicehelpful-imgframe  ">
                                <img src="https://d323sccto6ke4l.cloudfront.net/images/lab/420/en-us/29.jpg" alt='' class="voicehelpful-img " />
                            </div>
                            <div className="voicehelpful-text">
                            <span><p>4 Outsourcing <br /> 
                                Lessons From A Games Audio Pro </p></span>


                            </div>
                        </li>
                        <li class="voicehelpful-section" uk-scrollspy="cls: uk-animation-zoom-in; repeat: true">

                            <div className='voicehelpful-slide'> </div>
                            <div className="voicehelpful-imgframe  ">
                                <img src="https://d323sccto6ke4l.cloudfront.net/images/lab/420/en-us/9.jpg" alt='' class="voicehelpful-img " />
                            </div>
                            <div className="voicehelpful-text">
                            <span><p>Creating <br /> 
                                authentic cries of war</p></span>


                            </div>
                        </li>
                        <li class="voicehelpful-section"uk-scrollspy="cls: uk-animation-zoom-in; repeat: true"  >

                            <div className='voicehelpful-slide'> </div>
                            <div className="voicehelpful-imgframe  ">
                                <img src="https://d323sccto6ke4l.cloudfront.net/images/lab/420/en-us/35.jpg" alt='' class="voicehelpful-img " />
                            </div>
                            <div className="voicehelpful-text">
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
                <div className="voiceread-more" uk-scrollspy="cls: uk-animation-slide-left; repeat: true" >
                    <p>Read More</p>

                    <div className="voicehelpbtn-arrows">
                        <i class="fal fa-angle-right"></i>
                        <i class="fal fa-angle-right"></i>
                        <i class="fal fa-angle-right"></i>
                    </div>
                </div><br></br>
            </div>
            


          

        </div>
        </Grid>
        </Grid>
)
}
export default Voice