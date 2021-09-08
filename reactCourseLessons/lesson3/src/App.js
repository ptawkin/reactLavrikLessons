import React, { useState } from 'react';
import Counter from './Counter';

const productFromServer = [
	{
		id: 100,
		title: 'Ipnone 200',
		price: 12000,
		rest: 10,
		cnt: 1
	},
	{
		id: 101,
		title: 'Samsung AAZ8',
		price: 22000,
		rest: 2,
		cnt: 1
	},
	{
		id: 103,
		title: 'Nokia 3310',
		price: 5000,
		rest: 2,
		cnt: 1
	},
	{
		id: 105,
		title: 'Huawei ZZ',
		price: 15000,
		rest: 8,
		cnt: 1
	}
];

function App(){
	let [products, setProducts] = useState(productFromServer);
	let total = products.reduce((acc, pr) => acc + pr.price * pr.cnt, 0);

	let changeCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id !== id ? pr : {...pr, cnt}));
	}

	let remove = (id) => {
		setProducts(products.filter(pr => pr.id !== id));
	}

	let tmpSaleAllBy5 = () => {
		setProducts(products.map(pr => ({...pr, cnt: 5})));
	}

	let productsRows = products.map(pr => (
		<tr key={pr.id}>
			<td>{ pr.title }</td>
			<td>{ pr.price }</td>
			<td>
				<Counter max={100} current={pr.cnt} onChange={val => changeCnt(pr.id, val)} />
			</td>
			<td>{ pr.price * pr.cnt }</td>
			<td>
				<button  type="button" onClick={()=> remove(pr.id)}>X</button>
			</td>
		</tr>
	));

	return <div>
		<header>
			header
		</header>
		<main>
			<h1>Cart</h1>
			<hr/>
			<table>
				<thead>
					<tr>
						<td>Title</td>
						<td>Price</td>
						<td>Count</td>
						<td>Total</td>
					</tr>
				</thead>
				<tbody>
					{ productsRows }
				</tbody>
			</table>
			<hr/>
			<div>
				<strong>{ total }</strong>
			</div>
			<hr/>
			<button  type="button" onClick={tmpSaleAllBy5}>Want all 5</button>
		</main>
		<footer>
			footer
		</footer>
	</div>
}

export default App;