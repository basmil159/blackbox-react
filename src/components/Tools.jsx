import { Table } from "./table"

export const Tools = () => {
  let list=[
   [ "1","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "2","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "3","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "4","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "5","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "6","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "7","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "8","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "9","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "10","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "11","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "12","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "13","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "14","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "15","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ],
   [ "16","Type A",  "Threadcutter M10", "1","1","140.000","14.000","180.00","4","icon","icon","icon"  ]
 ]
 let colName=["SN","Type","Tool Name","ST","D","Length","Diameter","","N","","1","2"]
let pages=[1,2,3,4]
  return (
<section className="logs">
    <Table list={list} colName={colName} args="logs" totalItems="16" Pages={pages} itemsPerPage="16"/>
    </section>
    );
  };