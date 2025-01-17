import "./Home.css";
import BarcodeScanner from "../../Components/Barcode.tsx"
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";


export const Home = () => {
  const [id, setID] = useState(12328146)<number>;
  const [data, setData] = useState(null)<any>;


 useEffect(() => {
    const fetchData = async () => {
        const response = await axios.post("http://jogacf.app.dlsu-lscs.org/?id=" + id, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [id]);



   const onNewScanResult = (decodedText, decodedResult) => {
    setID(decodedText);
    console.log(decodedResult);
    };


  return (
    <>
      {/* App Content*/}
      <div className="homeLayout">
        {/* Info Part */}
        <div>
          {/* Header*/}
          <div className="header">
            <div className="headerTitle">Hello, {" "} 
            {data == null ? null : <>{data.lscs_data.full_name}</>}!
            </div>
            <div className="headerDesc">
              <span className="position">
            {data == null ? null : <>{data.lscs_data.position_name}, </>}
              </span>{" "}
            {data == null ? null : <>{data.lscs_data.committee_name}</>}
            </div>
            <div className="headerDesc">
            {data == null ? null : <>{data.lscs_data.email}</>}
            </div>
          </div>
          {/*   Fun Fact       */}
          <div className="funFact">
            <div className="factTitle">Did you Know?</div>
            <div className="factDesc">
            {data == null ? null : <>{data.llm_data.candidates[0].content.parts[0].text}</>}
            </div>
          </div>
        </div>
        {/*   Scan ID        */}
        <div>
          <div className="scanTitle">Scan the back of your ID here!</div>
           <BarcodeScanner
                fps={30}
                qrbox={240}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
      </div>
    </>
  );
};
