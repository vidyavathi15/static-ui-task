

import {BiArea} from "react-icons/bi"
import {IoMdInformationCircleOutline} from "react-icons/io"
import {BsCurrencyDollar} from "react-icons/bs"
import "./Purchase.css"


const Purchase  = () => {




    return(
        <div classsName="app-container">
            <div className="response-container">
            <div className="cp-container">
                <div className="heading-container">
                    <div className="product-container">

                        <p className="heading">Product Brand</p>
                    </div>
                <div className="product-container">

                        <p className="heading">Commited Volume</p>
                    </div>

                    <div className="product-container">

                        <p className="heading">Actuals</p>
                    </div>
                </div>
            <p style={{fontWeight:"bold"}}>Fungicides<span style={{fontWeight:"normal"}}>(optional)</span></p>
            <div className="gallons-container">
                <div className="container-1">
                    <p className="gallo-btn-2">Miravis Neo @</p>
                </div>
            
                <div className="container-2">
                    <p  className="gallo-1">10.00</p>
                    <button type="button" className="gallo-btn"
                    
                    >Gallons</button>
                </div>
                <div className="container-2">
                    <p className="gallo-1">20.00</p>
                    <button type="button" className="gallo-btn">Gallons</button>
                </div>
              </div>


              <div className="volume-2-container">
                  <div className="brand-select-1">
                  <p className="brand-select">Select Product Brand</p>
                  </div>
                  <input type="text" className="empty-text"/>
                </div>
                <div className="items-container">
                    
                        <p style={{width:"20%"}}>Corn CP Volume</p>
                   
                    <div className="container-3">
                        <p>10,000</p>
                        <p style={{marginLeft:"16%"}}>Gallons</p>
                    </div>
                    <div  className="container-3">
                        <p>20,000</p>
                        <p style={{marginLeft:"16%"}}>Gallons</p>
                    </div>
                </div>
                <div className="items-container">
                    
                        <p style={{width:"20%"}}>Corn CP Purchases</p>
                   
                    <div className="container-3">
                        <p>2 137,30</p>
                        <p style={{marginLeft:"16%"}}>USD</p>
                    </div>
                    <div  className="container-3">
                        <p>4 274,60</p>
                        <p style={{marginLeft:"16%"}}>USD</p>
                    </div>
                </div>
                <div className="validation-se-container">
                    <p>Validation of Purchases- Corn SE</p>
                </div>
                <div className="heading-container">
                    <div className="product-container">

                        <p className="heading">Product Brand</p>
                    </div>
                <div className="product-container">

                        <p className="heading">Commited Volume</p>
                    </div>

                    <div className="product-container">

                        <p className="heading">Actuals</p>
                    </div>
                </div>
                <p style={{fontWeight:"bold"}}>Seeds<span style={{fontWeight:"normal"}}>(optional)</span></p>

                <div className="volume-2-container">
                  <div className="brand-select-1">
                  <p className="brand-select">Select Product Brand</p>
                  </div>
                  <input type="text" className="empty-text"/>
                </div>

                <div className="items-container">
                    
                        <p style={{width:"20%"}}>Corn SE Volume</p>
                   
                    <div className="container-3">
                        <p>0.00</p>
                        
                    </div>
                    
                </div>

                <div className="items-container">
                    
                        <p style={{width:"20%"}}>Corn SE Purchases</p>
                   
                    <div className="container-3">
                        <p>0.00</p>
                        <p style={{marginLeft:"20px"}}>USD</p>

                        
                    </div>
                    <p>USD</p>
                    
                </div>
                <div className="awesom-container">
                    <div className="two-containers">
                <div className="converted-alue-container">
                    <div calssName="icon-value-container">
                    <div className="value-container">
                        <p>Commited Area</p>
                        <BiArea style={{backgroundColor:"#d3edda", marginRight:"10px", color:"green",  padding:"5px", width:"10px", height:"10px" , borderRadius:"20px"}}/>
                       


                    </div>
                    <p>101,00 Acres</p>
                  
                    </div>
                   <div className="information-container">
                       <p>information</p>
                       <IoMdInformationCircleOutline />
                   </div>
                   </div>

                   <div className="converted-alue-container">
                    <div calssName="icon-value-container">
                    <div className="value-container">
                        <p>Actual Area</p>
                        <BiArea style={{backgroundColor:"#d3edda",marginRight:"10px", color:"green",  padding:"5px", width:"10px", height:"10px" , borderRadius:"20px"}}/>
                       


                    </div>
                    <div className="acres-value">
                    <p>20.00</p>
                    <button type="button">Acres</button>
                    </div>
                  
                    </div>
                   <div className="information-container">
                       <p>information</p>
                       <IoMdInformationCircleOutline />
                   </div>
                   </div>
                   </div>

                    <div className="two-containers">
                   <div className="converted-alue-container">
                    <div calssName="icon-value-container">
                    <div className="value-container">
                        <p>Commited Purchases</p>
                        <BsCurrencyDollar style={{backgroundColor:"#d3edda",marginRight:"10px", color:"green",  padding:"5px", width:"10px", height:"10px" , borderRadius:"20px"}}/>
                       


                    </div>
                    <p>USD 2 137, 30</p>
                  
                    </div>
                   <div className="information-container">
                       <p>information</p>
                       <IoMdInformationCircleOutline />
                   </div>
                   </div>

                   <div className="converted-alue-container">
                    <div calssName="icon-value-container">
                    <div className="value-container">
                        <p>Actual Purchases</p>
                        <BsCurrencyDollar style={{backgroundColor:"#d3edda",marginRight:"10px", color:"green",  padding:"5px", width:"10px", height:"10px" , borderRadius:"20px"}}/>
                       


                    </div>
                    <p>USD 4 274,60</p>
                  
                    </div>
                   <div className="information-container">
                       <p>information</p>
                       <IoMdInformationCircleOutline />
                   </div>
                   </div>
                   </div>
                   <div className="two-containers">
                   <div className="converted-alue-container">
                    <div calssName="icon-value-container">
                    <div className="value-container">
                        <p>Min, Target Seed Purchases</p>
                        <BsCurrencyDollar style={{backgroundColor:"#d3edda", marginRight:"10px", color:"green",  padding:"5px", width:"10px", height:"10px" , borderRadius:"20px"}}/>
                       


                    </div>
                    <p>USD 0,00</p>
                  
                    </div>
                   <div className="information-container">
                       <p>information</p>
                       <IoMdInformationCircleOutline />
                   </div>
                   </div>
                   <div className="converted-alue-container">
                    <div calssName="icon-value-container">
                    <div className="value-container">
                        <p>Min Target CP Purchases</p>
                        <BsCurrencyDollar style={{backgroundColor:"#d3edda",marginRight:"10px", color:"green",  padding:"5px", width:"10px", height:"10px" , borderRadius:"20px"}}/>
                       


                    </div>
                    <p>USD 0,00</p>
                  
                    </div>
                   <div className="information-container">
                       <p>information</p>
                       <IoMdInformationCircleOutline />
                   </div>
                   </div>
                    </div>

                









                







                















            </div>
            </div>









        </div>
        </div>



    )
}



export default Purchase