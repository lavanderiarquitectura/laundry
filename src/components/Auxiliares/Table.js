
import React from 'react';
import Cell from './Cell';
import './Table.css'

class Table extends React.Component{

    render(){
		const {headings, rows, tableType} = this.props;

		this.renderHeadingRow = this.renderHeadingRow.bind(this);
		this.renderRow = this.renderRow.bind(this);
		
		const theadMarkup = (
		  <tr key=                       "heading">
			{headings.map(this.renderHeadingRow)}
		  </tr>
		);

		const tbodyMarkup = rows.map(this.renderRow);
	  
        const styles ={
            divLogin :{
                padding:             "5px",
                borderRadius:        "10px",
                backgroundColor:     "#FAFAFA",
                display: this.props.display,

            },
            botonInicio:{
                width: '90%',
                height: '40px',
                marginTop:'8px',
                marginBottom: '5px',
            },
            label:{
                color: 'white',
            },
            divInput:{
                textAlign: 'center',
                marginBottom: '0.5px'
            },
            inputs:{
                marginTop: '8px',
                height: '40px',
                marginBottom: '0',
            },
            input:{
              height: '26px',
              width: '40%'
          },
            logo:{
                width: '60%',
            },
            signin:{
                fontSize:            "12px",
                marginBottom:        "5px",
                marginTop: '5px',
                textAlign:           "center",
            },
            title:{
                textAlign: 'center',
                marginBottom: '0',
            },
            text:{
                textAlign: 'center',
                fontSize: '11px',
                marginBottom: '5px',
            }


        }
        
        return(
          <div className= "container" style={styles.divLogin}>
			    <table className="Table" style={{width:'100%'}}>
					<thead>{theadMarkup}</thead>
					<tbody>{tbodyMarkup}</tbody>
				  </table>
              
                
            </div>
        )
    }
	
	renderHeadingRow = (_cell, cellIndex) => {
		const {headings} = this.props;

		return (
		  <Cell
			key={`heading-${cellIndex}`}
			content={headings[cellIndex]}
			header={true}
		  />
		)
	};
	
	renderRow = (_row, rowIndex) => {
		const {rows} = this.props;
		const {tableType} = this.props;
		let extraButton;
			if(tableType === 'Machine-Table') {
				extraButton = (<td>
					<input id="edit" type="submit" name="edit"  value="On/Off" />
				</td>);
			}
		return (
		  <tr key={`row-${rowIndex}`}>
			{rows[rowIndex].map((element) => {
			  return (
				<Cell
				  content={element}
				/>
			  )
			})}
			{extraButton}
		  </tr>
		)
	};

}

export default Table;