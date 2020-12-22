import { useState } from 'react';
import './App.css';
import Client from './components/Client/Client';
import Specialist from './components/Specialist/Specialist';

function App() {
	const [client, setClient] = useState(true);
	const ChangeClient = () => {
		setClient(!client);
	}

	const [tasks, setTasks] = useState([
		{
			user: {
				id: 2,
				name: 'Abdu',
				client: false,
				phone:992111010036,
			},
			id: 2,
			completed: false,
			created: 1608549423650,
			name: 'Нужно заклеить обои 25 м2',
			category: 'Отделка и строительство',
			phone: 992929277725,
			price: 200,
		},
		{
			user: {
				id: 1,
				name: 'Firdavs',
				client: true,
				phone: 992989077725,
			},
			id: 1,
			completed: true,
			created: 1608549423600,
			name: 'Починить кран',
			category: 'Бытовой ремонт',
			phone: 992989077725,
			price: 80,
		},
	])

	const handleSaveTask = (task) => {
		setTasks((prevState) => [{ ...task }, ...prevState]);
	};

	const handleEditTask = (task) => {
		setTasks((prevState) => prevState.map((o) => {
			if (o.id !== task.id) {
				return o;
			}
			return { ...task };
		}))
	};

	const handleTaskComplete = (task) => {
		setTasks((prevState) => prevState.map((o) => {
			if (o.id !== task.id) {
				return o;
			}
			return { ...task };
		}))
	};

	const handleRemoveTask = (id) => {
		setTasks((prevState) => prevState.filter(o => o.id !== id));
	}


	return (
		<div className="App">
			<header className="App-header">
				<h1>Ustokor.com</h1>
			</header>
			<button id="Change-Client-Button" onClick={ChangeClient}>{client ? "Стать Специалистом" : "Стать заказчиком"}</button>
			{client ? <Client tasks={tasks}
				onSaveTask={handleSaveTask}
				onEditTask={handleEditTask}
				onTaskRemove={handleRemoveTask}
				onTaskComplete={handleTaskComplete} /> : <Specialist
					tasks={tasks.filter(o => !o.completed)} />}
		</div>
	);
}

export default App;
