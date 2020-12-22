import React from 'react'

function Task({ task, onComplete, onChange, onRemove }) {

	const handleClick = () => {
		onComplete({
			...task,
			completed: !task.completed,
		});
	}

	const handleChange = (evt) => {
		onChange(task.id);
	}

	const handleRemove = (evt) => {
		onRemove(task.id);
	}

	function getTimeFromStamp(timestamp) {
		const d = new Date(timestamp);
		const timeStampCon = d.getDate() + '.'
			+ (d.getMonth()) + '.'
			+ d.getFullYear() + "г. "
			+ d.getHours() + ':'
			+ d.getMinutes();
		return timeStampCon;
	};

	return (
		<article>
			<h5>{task.name}</h5>
			<span>Дата создания: {getTimeFromStamp(task.created)}</span><br />
			<span>Категория: {task.category}</span><br />
			<span>Телефон: {task.phone}</span><br />
			<span>Цена: {task.price} смн</span><br />
			<span>Статус заявки: {task.completed ? 'Закрыта' : 'Активна'}</span><br />
			{!task.completed ? <button onClick={handleClick}>Закрыть заявку</button>
				: <button onClick={handleClick}>Активировать заявку</button>}
			<button onClick={handleChange}>Изменить заявку</button>
			<button onClick={handleRemove}>Удалить заявку</button>
		</article>
	)
}

export default Task
