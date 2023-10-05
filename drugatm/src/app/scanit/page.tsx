import React from "react";
// import { QrReader } from 'react-qr-reader';

// const QRScanner: React.FC = () => {
//   const [scannedResult, setScannedResult] = React.useState<string | null>(null);

//   const handleScanned = (result: string) => {
//     setScannedResult(result);
//   };

//   return (
//     <div>
//       <QRCodeScanner
//         onScan={handleScanned}
//       />
//       {scannedResult && <p>Scanned result: {scannedResult}</p>}
//     </div>
//   );
// };


const IndexPage = () => {

  const handleScan = (data:string) => {
    console.log(data);
  }
  const handleError = (err:any) => {
    console.error(err)
  }

  const previewStyle = {
    height: 240*2,
    width: 320*2,
  }

    return(
        <div>
          {/* <QrReader
            delay={100}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
            /> */}
          {/* <p>{this.state.result}</p> */}
        </div>
      )
  };

export default IndexPage;  

// constructor(props){
//     super(props)
//     this.state = {
//       delay: 100,
//       result: 'No result',
//     }

//     this.handleScan = this.handleScan.bind(this)
//   }
//   handleScan(data){
//     this.setState({
//       result: data,
//     })
//   }
//   handleError(err){
//     console.error(err)
//   }
//   render(){
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }
