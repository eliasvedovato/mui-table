import MUIDataTable from "mui-datatables";
import users from './users.json'

const columns = [
  {
    name: 'id',
    label: 'ID',
  },
  {
    name: 'name',
    label: 'NAME',
  },
  {
    name: 'gender',
    label: 'GENDER',
  },
]

export const TableJson = () => {
  return (
    <MUIDataTable
      title={'lista de usuarios'}
      data={users}
      columns={columns}
    />
  )
}