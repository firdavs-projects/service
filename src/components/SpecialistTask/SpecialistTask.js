import React from 'react'

function SpecialistTask({ task, }) {

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
			<span>Клиент: {task.user.name}</span><br />
			<span>Категория: {task.category}</span><br />
			<span>Телефон: {task.phone}</span><br />
			<span>Цена: {task.price} смн</span><br />
		</article>
	)
}

export default SpecialistTask;
