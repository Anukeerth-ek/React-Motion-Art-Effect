import section1 from "../assets/motionarteffect-img11.png";
import section2 from "../assets/motionarteffect-img10.png";

const SectionPage = () => {
     return (
          <div className="pt-[100px]">
               <div>
                    <div className="flex justify-center w-full mb-[60px]">
                         <h2 className="text-center text-[35px] text-white">
                              Apply On Any Section Or Enable
                              <br /> For Whole Page
                         </h2>
                    </div>
                    <div className="flex w-full px-9">
                         <div className="section-page mr-3 p-6 px-9">
                              <h2 className="text-white">Apply On Section</h2>
                              <p className="text-white">
                                   Apply on section is a game-changer, offering an unparalleled<br></br> way to manage applications
                                   directly from your website.{" "}
                              </p>
                              <img src={section1} className="min-w-[500px]" />
                         </div>

                         <div className="section-page p-6 px-9">
                              <img src={section2} className=" mt-[80px]" />
                         </div>
                    </div>
               </div>
          </div>
          //   background-image: linear-gradient(180deg, #0D061F 0%, #251E35 100%);
     );
};

export default SectionPage;
