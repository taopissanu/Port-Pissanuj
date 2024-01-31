import React from "react";

function Header() {


    return (


        <div class="justify-items-center">

            <figure class='justify-between items-center'>
                <div class="col-auto" >
                    <img
                        src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/330573896_733686241539311_4618676763709706936_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&cb=99be929b-8d691acd&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFkUdhuUusJ44vwPFWbAQbC8jGSpqKG2zryMZKmoobbOp1ew7DiSZfW0ppdnwznz1Jxa1D1PkHvOW8DrvI4CvHt&_nc_ohc=H-KBruKbrgUAX9t3inC&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&oh=00_AfAbSJbLHNkBc6F983pUDZnkPTUkpa8rT_dO1k0zqTRngQ&oe=65BC8EF7"
                        alt="taopicture"
                        className="rounded-xl shadow-2xl mx-auto max-w-md m-5"
                    />

                </div>
                <div class="text-center font-bold font-mono" >
                    <div className="text-5xl"> <ul>PISSANU JENJIT</ul></div>
                    <div className="text-2xl "><ul>Software Developer</ul></div>


                </div>

                <div class="text-center font-bold font-mono" >
                    <div className="text-2xl"> <ul>Contact</ul></div>



                </div>
                <div class="text-center " >
                    <p>
                        <div> <ul>Email : pissanuj2023@gmail.com</ul></div>
                        <div> <ul>Line : psn1996 </ul></div>
                        <div> <ul>Phone : 0839944886 </ul></div>
                        <div className="rounded-xl shadow-2xl mx-auto max-w-md m-5 size-40">
                            <img src="..\assets\linecontact.jpg" alt="line" sizes="50%"></img>
                        </div>
                        
                    </p>



                </div>
            </figure>



        </div>


    )
}

export default Header