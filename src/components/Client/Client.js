import React, { useState } from 'react'
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm'

function Client({ tasks, onSaveTask, onEditTask, onTaskComplete, onTaskRemove }) {

	const [edited, setEdited] = useState();

	const handleSave = (task) => {
		if (edited !== undefined) {
			onEditTask(task);
			setEdited(undefined);
			return;
		}
		onSaveTask(task);
		setEdited(undefined);
	};

	const handleCancel = () => {
		setEdited(undefined);
	}

	const handleTaskComplete = (task) => {
		onTaskComplete(task);
	};

	const handleTaskChange = (id) => {
		const task = tasks.find(o => o.id === id);
		if (task === undefined) {
			return;
		};
		setEdited(task);
	};

	const handleTaskRemove = (id) => {
		onTaskRemove(id);
	};


	return (
		<div>
			<h3>Создать заявку</h3>
			<span></span>
			<TaskForm edited={edited}
				onSave={handleSave}
				onCancel={handleCancel} />
			<h3>Мои заявки</h3>
			{tasks.map(o => <Task
				key={o.id}
				task={o}
				onComplete={handleTaskComplete}
				onChange={handleTaskChange}
				onRemove={handleTaskRemove} />)}
		</div>
	)
}

export default Client
