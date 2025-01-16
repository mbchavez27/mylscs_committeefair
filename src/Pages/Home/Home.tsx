import "./Home.css";
import BarcodeScanner from "../../Components/Barcode.tsx"
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";


export const Home = () => {
  const [id, setID] = useState(null)<number>;
  const [data, setData] = useState(null)<any>;


 useEffect(() => {
    const fetchData = async () => {
        const response = await axios.post("http://jogacf.app.dlsu-lscs.org/?id=" + id, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      setData(data);
    };
    fetchData();
  }, [id]);



   const onNewScanResult = (decodedText, decodedResult) => {
    setID(decodedText);
    console.log(decodedText);
    };

  return (
    <>
      {/* App Content*/}
      <div className="homeLayout">
        {/* Info Part */}
        <div>
          {/* Header*/}
          <div className="header">
            {data == null ? 
<p>Scan the ID</p>
            : (<>
          <div className="headerTitle">Hello, {data.lscs_data.full_name||"Scan the barcode behind your id!"}</div>
          <div className="headerDesc">
            <span className="position">{data.lscs_data.position_name || " "}</span>{" "}
          {data.lscs_data.committee_name || " "}</div>
          <div className="headerDesc">{data.lscs_data.email || " "}</div>
              </>
            )}
          {/* {/*   Fun Fact       */} 
          {/* <div className="funFact"> */}
          {/*   <div className="factTitle">Did you Know?</div> */}
          {/*   <div className="factDesc"> */}
          {/*     {data.llm_data.candidates.content.parts[0].text || " "} */}
          {/*   </div> */}
          {/* </div> */}
        </div>
        {/*   Scan ID        */}
        <div>
          <div className="scanTitle">Scan the back of your ID here!</div>
           <BarcodeScanner
                fps={10}
                qrbox={250}
                disableFlip={true}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
      </div>
      </div>
    </>
  );
};
