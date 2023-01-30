import MUIDataTable from 'mui-datatables'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const TableAxios = () => {
	// configuramos los hooks
	const [products, setProducts] = useState([])

	// funcion para mosrtar los datos con axios
	const endpoint = 'https://fakestoreapi.com/products'

	const getData = async () => {
		await axios.get(endpoint).then(response => {
			const data = response.data
			console.log(data)
			setProducts(data)
		})
	}

	useEffect(() => {
		getData()
	}, [])

	// definimos las columns
	const columns = [
		{
			name: 'id',
			label: 'ID',
		},
		{
			name: 'title',
			label: 'TITLE',
		},
		{
			name: 'category',
			label: 'CATEGORY',
		},
	]

	// renderizamos la datatable
	return (
		<MUIDataTable
			title={'Show data with axios'}
			data={products}
			columns={columns}
		/>
	)
}
