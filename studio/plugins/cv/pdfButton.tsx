import JsPDF from 'jspdf';


export function PdfButton({ cv }) {

  // const handleClick = () => {
  //   const report = new JsPDF('p', 'pt', 'a4');
  //   report.setFont("Arial")
  //   // eslint-disable-next-line react/prop-types
  //   report.html(cv.current)
  //     .then(() => {
  //       report.save('report.pdf');
  //     });
  // }

  return (
    <button
    // onClick={() => handleClick()}
    >
      Create PDF
    </button>
  )
}