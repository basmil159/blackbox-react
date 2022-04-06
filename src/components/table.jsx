export const Table = (props) => {
    if (props.list.length > 0) {
        return (
        <section className={props.args}>
            <table className="table">
                <thead className="table__head">
                <tr>
                    {props.colName.map((header,index)=>(
                        <th key={index}>
                            {/* {if (header.toUpperCase().localeCompare("DATE") ||header.toUpperCase().localeCompare("TIME") ){
                                "My name"
                            }} */}
                            {header}
                        </th>    
                    ))}
                </tr>
                </thead>
                <tbody className="paragraph">
                    {props.list.map((obj,index)=>(
                        <tr key={index}>
                            {obj.map((value,index2)=>(
                                <td key={index2}>
                                    {value}                                    
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <span>Showing 1-{props.itemsPerPage} of {props.totalItems} items</span>
                <div className="pagination__no">
                {props.Pages.map((pgNo,index)=>(
                        <span className="pagination__no--btn active" key={index}>{pgNo}</span>                             
                    ))}
                
                </div>
            </div>
            </section>
        );

    }
    return(
        <section className={props.args}>
            No Data found!!
        </section>
    );
  };