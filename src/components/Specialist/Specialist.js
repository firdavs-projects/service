import React from 'react'
import SpecialistTask from '../SpecialistTask/SpecialistTask'

function Specialist({ tasks }) {
	return (
		<div>
			<h3>Задачи</h3>
			<span>Выберите подходящую вам задачу и свяжитесь с клиентом</span>
			{tasks.map(o => <SpecialistTask
				key={o.id}
				task={o} />)}
		</div>
	)
}

export default Specialist
