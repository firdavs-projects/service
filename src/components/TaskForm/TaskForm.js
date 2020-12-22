import React, { useEffect, useState } from 'react';
import './TaskForm.css';

const empty = {
	user: {
		id: 1,
		name: 'Firdavs',
		client: true,
	},
	id: 0,
	completed: false,
	created: 0,
	name: '',
	category: '',
	phone: '',
	price: 0,
}

function TaskForm({ edited = empty, onSave, onCancel }) {
	const [task, setTask] = useState(empty);

	useEffect(() => {
		setTask(edited);
	}, [edited]);

	const handleSubmit = (ev) => {
		ev.preventDefault();
		onSave({
			...task,
			id: task.id || Date.now(),
			created: task.created || Date.now(),
		});
		setTask(empty);
	}

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setTask((prevState) => ({ ...prevState, [name]: value }));
	}

	const handleCancel = (ev) => {
		onCancel();
		setTask(empty);
	}

	return (
		<>
			<form id="Task-Form" onSubmit={handleSubmit}>
				<textarea type="text"
					onChange={handleChange}
					value={task.name || ''}
					name="name"
					placeholder="Напишите подробно что нужно сделать включая объёмы работ"></textarea><br />
				<select name="category"
					onChange={handleChange}
					value={task.category || ''}>
					<option>Отделка и строительство</option>
					<option>Помощь по хозяйству</option>
					<option>Бытовой ремонт</option>
					<option>Техника и оборудование</option>
				</select><br />
				<input type="number"
					onChange={handleChange}
					value={task.phone || ''}
					name="phone"
					placeholder="Ваш телефон"></input><br />
				<input type="number"
					onChange={handleChange}
					value={task.price || ''}
					name="price"
					placeholder="Цена"></input><br />
				{edited === empty ? <button>Создать заявку</button>
					: <button>Изменить заявку</button>}
			</form>
			{edited !== empty && <button onClick={handleCancel}>Отменить</button>}
		</>
	)
}

export default TaskForm
