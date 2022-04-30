import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { FaRocketchat ,FaChartLine,FaFilter,FaColumns,FaChevronLeft,FaChevronRight} from 'react-icons/fa';
import {AiTwotoneLike} from 'react-icons/ai'
import img from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

const App = () => {
   const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
 
  const [toggle,setToggle] = useState(false);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Athlete Details',
      children: [
        {
          field: 'athlete',
           rowDrag: true ,
          filter: 'agTextColumnFilter',
           enableValue: true,
          suppressMenu: true,
        },
        {
          field: 'age',
          
          filter: 'agNumberColumnFilter',
        },
        { headerName: 'Country', field: 'country' },
      ],
    },
    {
      headerName: 'Sports Results',
      children: [
        { field: 'sport' },
        {
          columnGroupShow: 'close',
          field: 'total',
          
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'close',
          field: 'gold',
          
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'close',
          field: 'silver',
          
          filter: 'agDateColumnFilter',
        },
        {
          columnGroupShow: 'close',
          field: 'bronze',
          
          filter: 'agNumberColumnFilter',
        },
          {
          columnGroupShow: 'close',
          field: 'gold',
          
          filter: 'agNumberColumnFilter',
        },
           {
          columnGroupShow: 'close',
          field: 'silver',
          
          filter: 'agNumberColumnFilter',
        },
           {
          columnGroupShow: 'close',
          field: 'bronze',
          
          filter: 'agNumberColumnFilter',
        },
      ],
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      filter: true,
        rowDrag: true,
        floatingFilter: true
    };
  }, []);


   const custom ={
     transform: 'translateX(0px)',
   }

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine" >
         <div className='chat' style={toggle ? custom : null}  >
          {toggle ? <button className='toggle-icon' onClick={()=>setToggle(!toggle)}><FaChevronLeft className='chat-icon' /></button> : <button className='toggle-icon' onClick={()=>setToggle(!toggle)}><FaChevronRight className='chat-icon' onClick={()=>setToggle(!toggle)}/></button>}
          <div className='chat-header'>
            <ul className='chat-buttons'>
              <li><span><FaRocketchat/> </span><span>chat</span></li>
              <li><span><FaChartLine/> </span><span>stats</span></li>
              <li><span><FaFilter/> </span><span>filters</span></li>
              <li><span><FaColumns/> </span><span>columns</span></li>
             
            </ul>
       </div>
       <div className='chat-inner'>
         <h5>You, and <span>12 members</span> in chat</h5>
         <div className='chat-main'>
           
        
          <div className='chat-messages'>
            
                                       
            
            <img src={img} alt='user'/>
            <div className='chat-details'>
            <div className='chat-head'>
              <span className='name'>Jonus Nik</span>
              <span className='date'>10 min ago</span>
            </div>
            <div className='chat-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
            </div>
            <div className='chat-footer'>
              <div className='like'>
                <span><AiTwotoneLike/> </span>
                <span>5Likes</span>
              </div>
              <p>10 Replies</p>
            </div>
          </div>
         </div>
         
      
           
        
          <div className='chat-messages chat-replies'>
            
                                       
            
            <img src={img} alt='user'/>
            <div className='chat-details' style={{border:'none'}}>
            <div className='chat-head'>
              <span className='name'>Jonus Nik</span>
              <span className='date'>10 min ago</span>
            </div>
            <div className='chat-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
            </div>
            <div className='chat-footer'>
              <div className='like'>
                <span><AiTwotoneLike/> </span>
                <span>5Likes</span>
              </div>
              <p>10 Replies</p>
            </div>
          </div>
        
          </div>
          </div>
          <div className='chat-main' style={{marginTop:`30px`}}>
           
        
          <div className='chat-messages'>
            
                                       
            
            <img src={img} alt='user'/>
            <div className='chat-details' style={{border:'none'}}>
            <div className='chat-head'>
              <span className='name'>Jonus Nik</span>
              <span className='date'>10 min ago</span>
            </div>
            <div className='chat-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
            </div>
            <div className='chat-footer'>
              <div className='like'>
                <span><AiTwotoneLike/> </span>
                <span>5Likes</span>
              </div>
              <p>10 Replies</p>
            </div>
          </div>
         </div>
         </div>
         <input type='text' placeholder='search'/>
       </div>
           </div>
        <AgGridReact
        ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          rowDragManaged={true}
          animateRows={true}
         
        //  groupDefaultExpanded={groupDefaultExpanded}
        //  openByDefault={true}
        ></AgGridReact>
       
        
      </div>
      
    </div>
  );
};

export default App