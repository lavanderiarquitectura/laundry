import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Cell from './Cell';
import './Table.css'
import logo from '../../img/logo.png';

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
                padding:             "15px 15px 8px 15px",
                borderRadius:        "10px",
                marginTop:           "20px",
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
            <div className=          "container col-3" style={styles.divLogin}>
                <form>
                <div className=      "form-group" style={styles.divInput}>
                    <img id=         "logo" src={logo} style={styles.logo}></img>
                </div>    
               <h3 style={styles.title}>Machine list</h3>
          
			    <table className="Table">
					<thead>{theadMarkup}</thead>
					<tbody>{tbodyMarkup}</tbody>
				</table>
                
               </form>
                
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
					<input id="edit" type="submit" name="edit" value="Change availability" />
				</td>);
			}
		return (
		  <tr key={`row-${rowIndex}`}>
			{rows[rowIndex].map((element) => {
			  return (
				<Cell
				  key={`row-${rowIndex}-${rows[rowIndex].indexOf(element)}`}
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