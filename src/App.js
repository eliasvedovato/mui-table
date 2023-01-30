import './App.css';
import { TableAxios } from './tables/TableAxios';
import { TableBasic } from './tables/TableBasic';
import { TableJson } from './tables/TableJson';

function App() {
  return (
    <div style={{padding: 30, display: 'flex', flexDirection: 'column', gap: 20}}>
      <div><h1 style={{textAlign: 'center'}}>MIU Datatable and axios</h1></div>

      <TableBasic />
      <TableJson />
      <TableAxios />
    </div>
  );
}

export default App;
