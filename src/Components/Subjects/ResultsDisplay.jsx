import React from 'react'

const ResultsDisplay = () => {
  return (
    <>
        <table style={{width: '100%'}} className=' overflow-'>
            <thead>
                <tr>
                    <td style={{width: '25px', margin: '2px'}}>C/A</td>
                    <td style={{width: '25px', margin: '2px'}}>C/A</td>
                    <td style={{width: '25px', margin: '2px'}}>C/A</td>
                    <td style={{width: '25px', margin: '2px'}}>C/A</td>
                    <td style={{width: '25px', margin: '2px'}}>C/A</td>
                    <td style={{width: '25px', margin: '2px'}}>ASS</td>
                    <td style={{width: '25px', margin: '2px'}}>ASS</td>
                    <td style={{width: '25px', margin: '2px'}}>ASS</td>
                    <td style={{width: '25px', margin: '2px'}}>ASS</td>
                    <td style={{width: '25px', margin: '2px'}}>ASS</td>
                    <td style={{width: '25px', margin: '2px'}}>TEST</td>
                    <td style={{width: '25px', margin: '2px'}}>TEST</td>
                    <td style={{width: '25px', margin: '2px'}}>TEST</td>
                    <td style={{width: '25px', margin: '2px'}}>BONUS</td>
                    <td style={{width: '25px', margin: '2px'}}>BONUS</td>
                    <td style={{width: '25px', margin: '2px'}}>TOTAL</td>
                    <td style={{width: '25px', margin: '2px'}}>PERCENT</td>
                    <td style={{width: '25px', margin: '2px'}}>POSITION</td>
                </tr>
            </thead>
                <tbody id='result'>
                    <tr>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                    </tr>
                </tbody>
        </table>
    </>
  )
}

export default ResultsDisplay