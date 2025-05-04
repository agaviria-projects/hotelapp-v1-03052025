import { useParams } from "react-router-dom";
import Menu from "../components/menu";
import Footer from "../components/Footer";

export default function RoomDetailsPage() {
    //console.log("parametro",useParams());
    let {id} =useParams();
  return (
   <>
        <Menu/>
        <div className="w3-container" id="apartment"> 
            <h2 class="w3-text-green">The Apartment #{id}</h2>
            <img src="https://www.w3schools.com/w3images/livingroom.jpg" style={{"width":"100%","marginBottom":"-6px"}}/>
            <div class="w3-container">
                <h4><strong>The space</strong></h4>
                <div class="w3-row w3-large">
                    <div class="w3-col s6">
                        <p><i class="fa fa-fw fa-male"></i> Max people: 4</p>
                        <p><i class="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
                        <p><i class="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
                    </div>
                    <div class="w3-col s6">
                        <p><i class="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
                        <p><i class="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
                    </div>
                </div>
                <hr />
                
                <h4><strong>Amenities</strong></h4>
                <div class="w3-row w3-large">
                <div class="w3-col s6">
                    <p><i class="fa fa-fw fa-shower"></i> Shower</p>
                    <p><i class="fa fa-fw fa-wifi"></i> WiFi</p>
                    <p><i class="fa fa-fw fa-tv"></i> TV</p>
                </div>
                <div class="w3-col s6">
                    <p><i class="fa fa-fw fa-cutlery"></i> Kitchen</p>
                    <p><i class="fa fa-fw fa-thermometer"></i> Heating</p>
                    <p><i class="fa fa-fw fa-wheelchair"></i> Accessible</p>
                </div>
                </div>
                <hr />
                
                <h4><strong>Extra Info</strong></h4>
                <p>Our apartment is really clean and we like to keep it that way. Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>We accept: <i class="fa fa-credit-card w3-large"></i> <i class="fa fa-cc-mastercard w3-large"></i> <i class="fa fa-cc-amex w3-large"></i> <i class="fa fa-cc-cc-visa w3-large"></i><i class="fa fa-cc-paypal w3-large"></i></p>
                <hr />
                
                <h4><strong>Rules</strong></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Subscribe to receive updates on available dates and special offers.</p>
                <p><button class="w3-button w3-green w3-third">Subscribe</button></p>
            </div>
            {/*<!-- Contact -->*/}
            <div class="w3-container" id="contact">
                <h2>Contact</h2>
                <i class="fa fa-map-marker" style={{"width":"30px"}}></i> Chicago, US<br />
                <i class="fa fa-phone" style={{"width":"30px"}}></i> Phone: +00 151515<br />
                <i class="fa fa-envelope" style={{"width":"30px"}}> </i> Email: mail@mail.com<br />
                <p>Questions? Go ahead, ask them:</p>
                <form>
                    <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" /></p>
                    <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email" /></p>
                    <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message" /></p>
                    <button type="submit" class="w3-button w3-green w3-third">Send a Message</button>
                </form>
                </div>
        </div>
        <Footer/>
    </> 
  )
}
